import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  background: #0f172a;
`

export const Main = styled.main`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;
  padding: 40px 24px 60px;

  @media (max-width: 768px) {
    padding: 30px 20px 45px;
  }

  @media (max-width: 480px) {
    padding: 24px 16px 36px;
  }

  @media (max-width: 380px) {
    padding: 20px 12px 30px;
  }
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 20px;

  margin-bottom: 30px;

  @media (max-width: 650px) {
    align-items: stretch;
    flex-direction: column;

    gap: 18px;
  }
`

export const HeaderContent = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;

  gap: 8px;
`

export const Title = styled.h1`
  color: #f8fafc;

  font-size: 30px;
  line-height: 1.2;

  @media (max-width: 480px) {
    font-size: 26px;
  }

  @media (max-width: 380px) {
    font-size: 24px;
  }
`

export const Description = styled.p`
  color: #94a3b8;

  font-size: 15px;
  line-height: 1.5;

  @media (max-width: 480px) {
    font-size: 14px;
  }
`

export const NewTicketButton = styled.button`
  min-height: 46px;

  padding: 0 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  flex-shrink: 0;

  border: none;
  border-radius: 10px;

  background: #2563eb;

  color: #ffffff;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #1d4ed8;

    transform: translateY(-1px);
  }

  @media (max-width: 650px) {
    width: 100%;
  }

  @media (max-width: 380px) {
    min-height: 44px;

    padding: 0 12px;

    font-size: 14px;
  }
`

export const FiltersContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  gap: 12px;

  margin-bottom: 30px;

  @media (max-width: 650px) {
    flex-direction: column;
    align-items: stretch;

    margin-bottom: 22px;
  }
`

export const SearchContainer = styled.div`
  min-width: 0;
  height: 46px;

  flex: 1;

  display: flex;
  align-items: center;

  gap: 10px;

  padding: 0 14px;

  border: 1px solid #334155;
  border-radius: 10px;

  background: #111c30;

  color: #64748b;

  &:focus-within {
    border-color: #2563eb;
  }
`

export const SearchInput = styled.input`
  width: 100%;
  min-width: 0;

  border: none;
  outline: none;

  background: transparent;

  color: #f8fafc;

  font-size: 14px;

  &::placeholder {
    color: #64748b;
  }
`

export const FilterButton = styled.button`
  height: 46px;

  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  flex-shrink: 0;

  border: 1px solid #334155;
  border-radius: 10px;

  background: #111c30;

  color: #cbd5e1;

  cursor: pointer;

  transition: 0.2s;

  &:hover {
    background: #1e293b;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`

export const FilterPanel = styled.div`
  width: 100%;

  display: grid;

  grid-template-columns:
    repeat(3, minmax(0, 1fr)) auto;

  align-items: end;

  gap: 16px;

  margin-bottom: 28px;
  padding: 20px;

  background: #111c30;

  border: 1px solid #1e293b;
  border-radius: 12px;

  @media (max-width: 900px) {
    grid-template-columns:
      repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    padding: 16px;
  }

  @media (max-width: 380px) {
    padding: 14px;
  }
`

export const FilterGroup = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;

  gap: 8px;
`

export const FilterLabel = styled.label`
  color: #cbd5e1;

  font-size: 13px;
  font-weight: 600;
`

export const FilterSelect = styled.select`
  width: 100%;
  min-width: 0;
  height: 42px;

  padding: 0 12px;

  background: #0f172a;

  color: #e2e8f0;

  border: 1px solid #334155;
  border-radius: 8px;

  outline: none;

  cursor: pointer;

  &:focus {
    border-color: #2563eb;
  }
`

export const FilterActions = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const ClearFiltersButton = styled.button`
  height: 42px;

  padding: 0 16px;

  background: transparent;

  color: #94a3b8;

  border: 1px solid #334155;
  border-radius: 8px;

  font-weight: 600;

  cursor: pointer;

  transition: 0.2s;

  &:hover:not(:disabled) {
    color: #ffffff;

    border-color: #64748b;
  }

  &:disabled {
    opacity: 0.4;

    cursor: not-allowed;
  }

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const TicketsGrid = styled.section`
  width: 100%;

  display: grid;

  grid-template-columns:
    repeat(2, minmax(0, 1fr));

  gap: 18px;

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

export const EmptyState = styled.section`
  width: 100%;
  min-height: 360px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 40px 20px;

  border: 1px dashed #334155;
  border-radius: 16px;

  background: #111c30;

  text-align: center;

  @media (max-width: 480px) {
    min-height: 280px;

    padding: 30px 16px;
  }
`

export const EmptyIcon = styled.div`
  width: 64px;
  height: 64px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-bottom: 20px;

  border-radius: 16px;

  background: #1e3a8a;

  color: #60a5fa;

  @media (max-width: 380px) {
    width: 56px;
    height: 56px;
  }
`

export const EmptyTitle = styled.h2`
  margin-bottom: 10px;

  color: #f8fafc;

  font-size: 21px;

  @media (max-width: 480px) {
    font-size: 19px;
  }
`

export const EmptyDescription = styled.p`
  max-width: 420px;

  color: #94a3b8;

  font-size: 14px;
  line-height: 1.6;
`

export const ModalOverlay = styled.div`
  position: fixed;

  inset: 0;

  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 20px;

  background: rgba(2, 6, 23, 0.8);

  overflow-y: auto;

  @media (max-width: 480px) {
    padding: 12px;
  }

  @media (max-width: 380px) {
    padding: 8px;
  }
`

export const Modal = styled.div`
  width: 100%;
  max-width: 520px;
  max-height: 90vh;

  padding: 28px;

  overflow-y: auto;
  overflow-x: hidden;

  border: 1px solid #334155;
  border-radius: 16px;

  background: #111c30;

  box-shadow:
    0 25px 60px rgba(0, 0, 0, 0.35);

  @media (max-width: 480px) {
    max-height: calc(100vh - 24px);

    padding: 20px;

    border-radius: 12px;
  }

  @media (max-width: 380px) {
    max-height: calc(100vh - 16px);

    padding: 16px;
  }
`

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 15px;

  margin-bottom: 24px;

  @media (max-width: 480px) {
    margin-bottom: 20px;
  }
`

export const ModalTitle = styled.h2`
  min-width: 0;

  color: #f8fafc;

  font-size: 22px;
  line-height: 1.3;

  @media (max-width: 480px) {
    font-size: 20px;
  }
`

export const CloseButton = styled.button`
  width: 38px;
  height: 38px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;

  border: 1px solid #334155;
  border-radius: 8px;

  background: transparent;

  color: #94a3b8;

  cursor: pointer;

  &:hover {
    background: #1e293b;

    color: #f8fafc;
  }
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 18px;

  @media (max-width: 480px) {
    gap: 15px;
  }
`

export const InputGroup = styled.div`
  width: 100%;
  min-width: 0;

  display: flex;
  flex-direction: column;

  gap: 8px;
`

export const Label = styled.label`
  color: #cbd5e1;

  font-size: 14px;
  font-weight: 600;
`

export const Input = styled.input`
  width: 100%;
  min-width: 0;
  height: 46px;

  padding: 0 14px;

  border: 1px solid #334155;
  border-radius: 9px;

  outline: none;

  background: #0f172a;

  color: #f8fafc;

  &:focus {
    border-color: #2563eb;
  }

  &::placeholder {
    color: #64748b;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  min-width: 0;
  min-height: 110px;

  padding: 14px;

  resize: vertical;

  border: 1px solid #334155;
  border-radius: 9px;

  outline: none;

  background: #0f172a;

  color: #f8fafc;

  &:focus {
    border-color: #2563eb;
  }

  &::placeholder {
    color: #64748b;
  }
`

export const Select = styled.select`
  width: 100%;
  min-width: 0;
  height: 46px;

  padding: 0 14px;

  border: 1px solid #334155;
  border-radius: 9px;

  outline: none;

  background: #0f172a;

  color: #f8fafc;

  cursor: pointer;

  &:focus {
    border-color: #2563eb;
  }
`

export const FormActions = styled.div`
  display: flex;
  justify-content: flex-end;

  gap: 12px;

  margin-top: 6px;

  @media (max-width: 450px) {
    flex-direction: column-reverse;
  }
`

export const CancelButton = styled.button`
  min-height: 44px;

  padding: 0 18px;

  border: 1px solid #334155;
  border-radius: 9px;

  background: transparent;

  color: #cbd5e1;

  cursor: pointer;

  &:hover {
    background: #1e293b;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`

export const SubmitButton = styled.button`
  min-height: 44px;

  padding: 0 18px;

  border: none;
  border-radius: 9px;

  background: #2563eb;

  color: #ffffff;

  font-weight: 600;

  cursor: pointer;

  &:hover:not(:disabled) {
    background: #1d4ed8;
  }

  &:disabled {
    opacity: 0.7;

    cursor: not-allowed;
  }

  @media (max-width: 450px) {
    width: 100%;
  }
`

export const ErrorMessage = styled.p`
  width: 100%;

  padding: 11px;

  border: 1px solid #7f1d1d;
  border-radius: 8px;

  background: #450a0a;

  color: #fecaca;

  font-size: 13px;
  line-height: 1.5;

  text-align: center;
`