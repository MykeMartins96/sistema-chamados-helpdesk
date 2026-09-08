import { useEffect, useState } from 'react'

import {
  Plus,
  Search,
  Filter,
  Ticket,
  X
} from 'lucide-react'

import Navbar from '../../components/Navbar'
import TicketCard from '../../components/TicketCard'
import api from '../../services/api'

import {
  Container,
  Main,
  Header,
  HeaderContent,
  Title,
  Description,
  NewTicketButton,
  FiltersContainer,
  SearchContainer,
  SearchInput,
  FilterButton,
  FilterPanel,
  FilterGroup,
  FilterLabel,
  FilterSelect,
  FilterActions,
  ClearFiltersButton,
  TicketsGrid,
  EmptyState,
  EmptyIcon,
  EmptyTitle,
  EmptyDescription,
  ModalOverlay,
  Modal,
  ModalHeader,
  ModalTitle,
  CloseButton,
  Form,
  InputGroup,
  Label,
  Input,
  TextArea,
  Select,
  FormActions,
  CancelButton,
  SubmitButton,
  ErrorMessage
} from './styles'

function Tickets() {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)

  // Busca
  const [search, setSearch] = useState('')

  // Filtros
  const [showFilters, setShowFilters] = useState(false)
  const [statusFilter, setStatusFilter] = useState('')
  const [priorityFilter, setPriorityFilter] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')

  // Modal
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Ticket que está sendo editado
  const [editingTicket, setEditingTicket] = useState(null)

  // Formulário
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [priority, setPriority] = useState('Média')
  const [status, setStatus] = useState('Aberto')

  // Estados auxiliares
  const [error, setError] = useState('')
  const [saving, setSaving] = useState(false)

  // GET - buscar chamados
  async function loadTickets(filters = {}) {
    try {
      setLoading(true)

      const params = {}

      if (filters.status) {
        params.status = filters.status
      }

      if (filters.priority) {
        params.priority = filters.priority
      }

      if (filters.category) {
        params.category = filters.category
      }

      const response = await api.get('/tickets', {
        params
      })

      setTickets(response.data)
    } catch (error) {
      console.error(
        'Erro ao buscar chamados:',
        error
      )
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    loadTickets({
      status: statusFilter,
      priority: priorityFilter,
      category: categoryFilter
    })
  }, [
    statusFilter,
    priorityFilter,
    categoryFilter
  ])

  function resetForm() {
    setTitle('')
    setDescription('')
    setCategory('')
    setPriority('Média')
    setStatus('Aberto')
    setEditingTicket(null)
    setError('')
  }

  function openCreateModal() {
    resetForm()

    setIsModalOpen(true)
  }

  function openEditModal(ticket) {
    setEditingTicket(ticket)

    setTitle(ticket.title || '')
    setDescription(ticket.description || '')
    setCategory(ticket.category || '')
    setPriority(ticket.priority || 'Média')
    setStatus(ticket.status || 'Aberto')

    setError('')
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)

    resetForm()
  }

  // POST - criar chamado
  async function handleCreateTicket() {
    await api.post('/tickets', {
      title,
      description,
      category,
      priority
    })
  }

  // PUT - editar chamado completo
  async function handleEditTicket() {
    await api.put(
      `/tickets/${editingTicket._id}`,
      {
        title,
        description,
        category,
        priority,
        status
      }
    )
  }

  // Criar ou editar
  async function handleSubmitTicket(event) {
    event.preventDefault()

    if (
      !title ||
      !description ||
      !category ||
      !priority
    ) {
      setError('Preencha todos os campos.')
      return
    }

    try {
      setSaving(true)
      setError('')

      if (editingTicket) {
        await handleEditTicket()
      } else {
        await handleCreateTicket()
      }

      closeModal()

      await loadTickets({
        status: statusFilter,
        priority: priorityFilter,
        category: categoryFilter
      })
    } catch (error) {
      console.error(
        'Erro ao salvar chamado:',
        error
      )

      setError(
        error.response?.data?.message ||
        'Não foi possível salvar o chamado.'
      )
    } finally {
      setSaving(false)
    }
  }

  // PUT - alterar somente status pelo card
  async function handleStatusChange(
    ticketId,
    newStatus
  ) {
    try {
      await api.put(`/tickets/${ticketId}`, {
        status: newStatus
      })

      await loadTickets({
        status: statusFilter,
        priority: priorityFilter,
        category: categoryFilter
      })
    } catch (error) {
      console.error(
        'Erro ao atualizar chamado:',
        error
      )
    }
  }

  // DELETE - excluir chamado
  async function handleDeleteTicket(ticketId) {
    const confirmDelete = window.confirm(
      'Tem certeza que deseja excluir este chamado?'
    )

    if (!confirmDelete) {
      return
    }

    try {
      await api.delete(`/tickets/${ticketId}`)

      await loadTickets({
        status: statusFilter,
        priority: priorityFilter,
        category: categoryFilter
      })
    } catch (error) {
      console.error(
        'Erro ao excluir chamado:',
        error
      )
    }
  }

  // Limpar filtros
  function handleClearFilters() {
    setStatusFilter('')
    setPriorityFilter('')
    setCategoryFilter('')
  }

  // Busca no Front-End
  const filteredTickets = tickets.filter(
    (ticket) => {
      const searchText = search
        .toLowerCase()
        .trim()

      const ticketTitle =
        ticket.title?.toLowerCase() || ''

      const ticketDescription =
        ticket.description?.toLowerCase() || ''

      const ticketCategory =
        ticket.category?.toLowerCase() || ''

      return (
        ticketTitle.includes(searchText) ||
        ticketDescription.includes(searchText) ||
        ticketCategory.includes(searchText)
      )
    }
  )

  const hasActiveFilters =
    statusFilter ||
    priorityFilter ||
    categoryFilter

  return (
    <Container>
      <Navbar />

      <Main>
        <Header>
          <HeaderContent>
            <Title>
              Chamados
            </Title>

            <Description>
              Gerencie e acompanhe seus chamados.
            </Description>
          </HeaderContent>

          <NewTicketButton
            type="button"
            onClick={openCreateModal}
          >
            <Plus size={20} />
            Novo chamado
          </NewTicketButton>
        </Header>

        <FiltersContainer>
          <SearchContainer>
            <Search size={19} />

            <SearchInput
              type="text"
              placeholder="Buscar chamados..."
              value={search}
              onChange={(event) =>
                setSearch(event.target.value)
              }
            />
          </SearchContainer>

          <FilterButton
            type="button"
            onClick={() =>
              setShowFilters(!showFilters)
            }
          >
            <Filter size={18} />
            Filtros
          </FilterButton>
        </FiltersContainer>

        {showFilters && (
          <FilterPanel>
            <FilterGroup>
              <FilterLabel>
                Status
              </FilterLabel>

              <FilterSelect
                value={statusFilter}
                onChange={(event) =>
                  setStatusFilter(
                    event.target.value
                  )
                }
              >
                <option value="">
                  Todos
                </option>

                <option value="Aberto">
                  Aberto
                </option>

                <option value="Em andamento">
                  Em andamento
                </option>

                <option value="Resolvido">
                  Resolvido
                </option>
              </FilterSelect>
            </FilterGroup>

            <FilterGroup>
              <FilterLabel>
                Prioridade
              </FilterLabel>

              <FilterSelect
                value={priorityFilter}
                onChange={(event) =>
                  setPriorityFilter(
                    event.target.value
                  )
                }
              >
                <option value="">
                  Todas
                </option>

                <option value="Baixa">
                  Baixa
                </option>

                <option value="Média">
                  Média
                </option>

                <option value="Alta">
                  Alta
                </option>
              </FilterSelect>
            </FilterGroup>

            <FilterGroup>
              <FilterLabel>
                Categoria
              </FilterLabel>

              <FilterSelect
                value={categoryFilter}
                onChange={(event) =>
                  setCategoryFilter(
                    event.target.value
                  )
                }
              >
                <option value="">
                  Todas
                </option>

                <option value="Acesso">
                  Acesso
                </option>

                <option value="Financeiro">
                  Financeiro
                </option>

                <option value="Suporte Técnico">
                  Suporte Técnico
                </option>

                <option value="Cadastro">
                  Cadastro
                </option>
              </FilterSelect>
            </FilterGroup>

            <FilterActions>
              <ClearFiltersButton
                type="button"
                onClick={handleClearFilters}
                disabled={!hasActiveFilters}
              >
                Limpar filtros
              </ClearFiltersButton>
            </FilterActions>
          </FilterPanel>
        )}

        {loading ? (
          <EmptyState>
            <EmptyTitle>
              Carregando chamados...
            </EmptyTitle>
          </EmptyState>
        ) : filteredTickets.length > 0 ? (
          <TicketsGrid>
            {filteredTickets.map((ticket) => (
              <TicketCard
                key={ticket._id}
                ticket={ticket}
                onStatusChange={
                  handleStatusChange
                }
                onEdit={openEditModal}
                onDelete={
                  handleDeleteTicket
                }
              />
            ))}
          </TicketsGrid>
        ) : (
          <EmptyState>
            <EmptyIcon>
              <Ticket size={34} />
            </EmptyIcon>

            <EmptyTitle>
              Nenhum chamado encontrado
            </EmptyTitle>

            <EmptyDescription>
              {search || hasActiveFilters
                ? 'Tente alterar a busca ou limpar os filtros.'
                : 'Crie seu primeiro chamado para começar a acompanhar suas solicitações.'}
            </EmptyDescription>
          </EmptyState>
        )}
      </Main>

      {isModalOpen && (
        <ModalOverlay>
          <Modal>
            <ModalHeader>
              <ModalTitle>
                {editingTicket
                  ? 'Editar chamado'
                  : 'Novo chamado'}
              </ModalTitle>

              <CloseButton
                type="button"
                onClick={closeModal}
              >
                <X size={20} />
              </CloseButton>
            </ModalHeader>

            <Form
              onSubmit={handleSubmitTicket}
            >
              <InputGroup>
                <Label htmlFor="title">
                  Título
                </Label>

                <Input
                  id="title"
                  type="text"
                  placeholder="Ex: Erro ao acessar sistema"
                  value={title}
                  onChange={(event) =>
                    setTitle(event.target.value)
                  }
                />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="description">
                  Descrição
                </Label>

                <TextArea
                  id="description"
                  placeholder="Descreva o problema..."
                  value={description}
                  onChange={(event) =>
                    setDescription(
                      event.target.value
                    )
                  }
                />
              </InputGroup>

              <InputGroup>
                <Label htmlFor="category">
                  Categoria
                </Label>

                <Select
                  id="category"
                  value={category}
                  onChange={(event) =>
                    setCategory(
                      event.target.value
                    )
                  }
                >
                  <option value="">
                    Selecione uma categoria
                  </option>

                  <option value="Acesso">
                    Acesso
                  </option>

                  <option value="Financeiro">
                    Financeiro
                  </option>

                  <option value="Suporte Técnico">
                    Suporte Técnico
                  </option>

                  <option value="Cadastro">
                    Cadastro
                  </option>
                </Select>
              </InputGroup>

              <InputGroup>
                <Label htmlFor="priority">
                  Prioridade
                </Label>

                <Select
                  id="priority"
                  value={priority}
                  onChange={(event) =>
                    setPriority(
                      event.target.value
                    )
                  }
                >
                  <option value="Baixa">
                    Baixa
                  </option>

                  <option value="Média">
                    Média
                  </option>

                  <option value="Alta">
                    Alta
                  </option>
                </Select>
              </InputGroup>

              {editingTicket && (
                <InputGroup>
                  <Label htmlFor="status">
                    Status
                  </Label>

                  <Select
                    id="status"
                    value={status}
                    onChange={(event) =>
                      setStatus(
                        event.target.value
                      )
                    }
                  >
                    <option value="Aberto">
                      Aberto
                    </option>

                    <option value="Em andamento">
                      Em andamento
                    </option>

                    <option value="Resolvido">
                      Resolvido
                    </option>
                  </Select>
                </InputGroup>
              )}

              {error && (
                <ErrorMessage>
                  {error}
                </ErrorMessage>
              )}

              <FormActions>
                <CancelButton
                  type="button"
                  onClick={closeModal}
                >
                  Cancelar
                </CancelButton>

                <SubmitButton
                  type="submit"
                  disabled={saving}
                >
                  {saving
                    ? 'Salvando...'
                    : editingTicket
                      ? 'Salvar alterações'
                      : 'Criar chamado'}
                </SubmitButton>
              </FormActions>
            </Form>
          </Modal>
        </ModalOverlay>
      )}
    </Container>
  )
}

export default Tickets