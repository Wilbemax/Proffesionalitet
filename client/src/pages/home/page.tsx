import { useState } from "react";
import { SignInForm } from "../../features/auth/ui/sign-in-form";
import { About, AuthorizationUi, ContestUI, Footer, Greating, Header, Landing, ReviewsUI, SearchUi, Subscribe } from "../../shared/components";

export default function Home() {
    const [search, setSearch] = useState("");
    const [email, setEmail] = useState("");
    return (
        <>
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
            <ReviewsUI />
            <Footer />
        </>
    )
}