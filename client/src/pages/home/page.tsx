import { useState } from "react";
import { SignIn } from "../../features/auth/ui/sign-in-form";
import { About, AuthorizationUi, Greating, ReviewsUI, Subscribe } from "../../shared/components";
import { ContestBlock } from "../../features/contests/contests-block";
import { LandingFeature } from "../../features/landing-feature/landing-feature";

export default function Home() {
    const [email, setEmail] = useState("");
    return (
        <>

            <LandingFeature />
            <About />
            <Greating />
            <AuthorizationUi>
                <SignIn />
            </AuthorizationUi>
            <ContestBlock />
            <Subscribe value={email} onChange={setEmail} />
            <ReviewsUI />

        </>
    )
}