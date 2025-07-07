import { AtomText } from "@atoms";
import { SignForm } from "@molecules";


export const FillPhone = () => {
    return (
        <>
            <AtomText variant="cardTitle" asChild className="mt-[60px] text-[28px]">
                <p>Для можливості подачі запиту про допомогу, Вам потрібно авторизуватися або зареєструватися.</p>
            </AtomText>
            <SignForm />
        </>
    );
};