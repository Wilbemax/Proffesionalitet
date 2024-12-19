import { useState } from "react";
import { SignInForm } from "../../features/auth/ui/sign-in-form";
import { About, AuthorizationUi, ContestUI, Greating, Header, Landing, SearchUi, Subscribe } from "../../shared/components";
import { Container } from "../../shared/ui";

export default function Home() {
    const [search, setSearch] = useState("");
    const [email, setEmail] = useState("");
    return (
        <Container>
            <Header />
            <Landing />
            <About />
            <Greating />
            <AuthorizationUi>
                <SignInForm />
            </AuthorizationUi>
            <SearchUi onSearch={setSearch} value={search}/>
            <ContestUI />
            <Subscribe value={email} onChange={setEmail} />
        </Container>
    )
}