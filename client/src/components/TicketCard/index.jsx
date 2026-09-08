import {
  CalendarDays,
  Tag,
  AlertTriangle,
  Trash2,
  Pencil
} from 'lucide-react'

import {
  Card,
  Header,
  Title,
  StatusBadge,
  Description,
  InfoRow,
  InfoItem,
  Footer,
  PriorityBadge,
  Actions,
  StatusSelect,
  EditButton,
  DeleteButton
} from './styles'

function TicketCard({
  ticket,
  onStatusChange,
  onEdit,
  onDelete
}) {
  return (
    <Card>
      <Header>
        <Title>{ticket.title}</Title>

        <StatusBadge status={ticket.status}>
          {ticket.status}
        </StatusBadge>
      </Header>

      <Description>
        {ticket.description}
      </Description>

      <InfoRow>
        <InfoItem>
          <Tag size={16} />
          {ticket.category}
        </InfoItem>

        <InfoItem>
          <CalendarDays size={16} />
          {new Date(ticket.createdAt).toLocaleDateString('pt-BR')}
        </InfoItem>
      </InfoRow>

      <Footer>
        <PriorityBadge priority={ticket.priority}>
          <AlertTriangle size={15} />
          {ticket.priority}
        </PriorityBadge>

        <Actions>
          <StatusSelect
            value={ticket.status}
            onChange={(event) =>
              onStatusChange(
                ticket._id,
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
          </StatusSelect>

          <EditButton
            type="button"
            onClick={() => onEdit(ticket)}
            title="Editar chamado"
          >
            <Pencil size={17} />
          </EditButton>

          <DeleteButton
            type="button"
            onClick={() => onDelete(ticket._id)}
            title="Excluir chamado"
          >
            <Trash2 size={17} />
          </DeleteButton>
        </Actions>
      </Footer>
    </Card>
  )
}

export default TicketCard