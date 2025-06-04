"use client";

import Image from "next/image";
import { AtomHR, AtomText } from "@atoms";

export const StepsBlock = () => {

    return (
        <div className="flex w-full flex-wrap gap-[20px]">
            <div className="flex items-center w-[calc(50%-10px)] bg-white py-[36px] px-[44px] rounded-[30px] gap-x-[8px]">
                <div className="flex w-full max-w-[calc(51%-4px)] flex-col gap-[20px]">
                    <AtomText variant="h3" asChild>
                        <h3>Місія</h3>
                    </AtomText>
                    <AtomText variant="description">Ми робимо добро системно — з розумінням, для людей і разом із людьми.</AtomText>
                    <div className="w-full flex flex-col gap-[25px]">
                        <AtomText>Благодійність для нас — це не просто допомога, а інвестиція в гідність, стійкість і мрії.</AtomText>
                        <AtomHR className="max-w-[70%]" />
                        <AtomText>Ми діємо чесно, прозоро й партнерськи, щоб наш вплив жив довше, ніж сама допомога.</AtomText>
                    </div>
                </div>
                <div className="w-full max-w-[calc(49%-4px)] h-[203px] rounded-[20px] overflow-hidden relative">
                    <Image src="/test/mission.png" alt="mission" fill className="object-cover" />
                </div>
            </div>
            <div className="flex items-center w-[calc(50%-10px)] bg-white py-[36px] px-[44px] rounded-[30px] gap-x-[8px]">
                <div className="flex w-full max-w-[calc(51%-4px)] flex-col gap-[20px]">
                    <AtomText variant="h3" asChild>
                        <h3>Наша роль</h3>
                    </AtomText>
                    <AtomText variant="description">Наша роль — розпізнати сенс, з’єднати партнерів, підсилити важливе.</AtomText>
                    <div className="w-full flex flex-col gap-[25px]">
                        <AtomText>Ми не просто підтримуємо ініціативи — ми обираємо ті, які створюють спільну цінність і мають довгостроковий вплив.</AtomText>
                        <AtomHR className="max-w-[70%] bg-transparent" />
                        <AtomText>Ми діємо як відповідальна компанія, яка інвестує у зміни, а не просто реагує на запити.</AtomText>
                    </div>
                </div>
                <div className="w-full max-w-[calc(49%-4px)] h-[203px] rounded-[20px] overflow-hidden relative">
                    <Image src="/test/role.jpg" alt="mission" fill className="object-cover" />
                </div>
            </div>
            <div className="flex flex grid-cols-2 items-center w-[calc(50%-10px)] bg-white py-[36px] px-[44px] rounded-[30px] gap-x-[64px]">
                <div className="flex w-full flex-col gap-[20px] max-w-[46%]">
                    <AtomText variant="h3" asChild>
                        <h3>Наш підхід</h3>
                    </AtomText>
                    <AtomText variant="description">Ми оцінюємо ініціативи за чіткими критеріями:</AtomText>
                    <ul className="gap-[10px] py-[30px] px-[18px] bg-light-pink rounded-[20px]">
                        <AtomText variant="missionList" asChild>
                            <li>відповідність цінностям</li>
                        </AtomText>
                        <AtomText variant="missionList" asChild>
                            <li>довгостроковий ефект</li>
                        </AtomText>
                        <AtomText variant="missionList" asChild>
                            <li>прозорість використання ресурсів</li>
                        </AtomText>
                        <AtomText variant="missionList" asChild>
                            <li>партнерський підхід</li>
                        </AtomText>
                    </ul>
                </div>
                <div className="w-full h-full flex items-end">
                    <div className="w-full flex flex-col gap-[25px]">
                        <AtomText>Наш благодійний підхід базується на цінностях «Аврори»:</AtomText>
                        <AtomHR className="max-w-[70%]" />
                        <AtomText className="italic">#створюй_свій_світ | #взаємодій_заради_мрій | #будь_відкритим_до_нового</AtomText>
                    </div>
                </div>
            </div>
            <div className="flex flex grid-cols-2 items-center w-[calc(50%-10px)] bg-white py-[36px] px-[44px] rounded-[30px] gap-x-[64px]">
                <div className="flex w-full flex-col gap-[20px]">
                    <AtomText variant="h3" asChild>
                        <h3>Приклади</h3>
                    </AtomText>
                    <AtomText variant="description">Ми підтримуємо Сили безпеки та оборони, ветеранів, медиків, громади, культурні та освітні проєкти, ініціативи з гендерної рівності.</AtomText>
                    <div className="w-full flex flex-col gap-[18px]">
                        <AtomText>Віримо, що один бронежилет — це не просто річ, а шанс повернутись живим.</AtomText>
                        <AtomHR className="max-w-[70%]" />
                        <AtomText>Ми реалізуємо підтримку як у форматі цільових проєктів, так і через акції в мережі магазинів «Аврора».</AtomText>
                        <AtomHR className="max-w-[70%]" />
                        <AtomText className="font-semibold">У розділах "Новини" та "Фото" дивіться реалізовані проєкти, щоб побачити, як саме працює наша підтримка.</AtomText>
                    </div>
                </div>
            </div>
        </div>
    )
}