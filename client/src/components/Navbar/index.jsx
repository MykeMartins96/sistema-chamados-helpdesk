import { Headphones, LayoutDashboard, Ticket, LogOut } from 'lucide-react'
import { NavLink, useNavigate } from 'react-router-dom'

import { useAuthContext } from '../../context/AuthContext'

import {
    Container,
    Content,
    Logo,
    Navigation,
    NavigationLink,
    UserArea,
    UserInfo,
    UserName,
    UserEmail,
    LogoutButton
} from './styles'

function Navbar() {
    const navigate = useNavigate()
    const { user, logout } = useAuthContext()

    function handleLogout() {
        logout()
        navigate('/login')
    }

    return (
        <Container>
            <Content>
                <Logo to="/dashboard">
                    <Headphones size={28} />
                    <span>HelpDesk</span>
                </Logo>

                <Navigation>
                    <NavigationLink
                        as={NavLink}
                        to="/dashboard"
                    >
                        <LayoutDashboard size={19} />
                        Dashboard
                    </NavigationLink>

                    <NavigationLink
                        as={NavLink}
                        to="/tickets"
                    >
                        <Ticket size={19} />
                        Chamados
                    </NavigationLink>
                </Navigation>

                <UserArea>
                    <UserInfo>
                        <UserName>
                            {user?.name || 'Usuário'}
                        </UserName>

                        <UserEmail>
                            {user?.email || ''}
                        </UserEmail>
                    </UserInfo>

                    <LogoutButton
                        type="button"
                        onClick={handleLogout}
                        title="Sair"
                    >
                        <LogOut size={20} />
                    </LogoutButton>
                </UserArea>
            </Content>
        </Container>
    )
}

export default Navbar