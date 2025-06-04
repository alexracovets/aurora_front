"use client";

import { StepType } from "@/types/StepType/StepType";
import { Step } from "@molecules";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AtomHR } from "@atoms";

export const StepsBlock = () => {

    // const [data, setData] = useState<StepType[]>([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         const res = await fetch("/api/missions");
    //         const data = await res.json();
    //         setData(data.docs);
    //     };

    //     fetchData();
    // }, []);

    return (
        <div className="flex w-full flex-wrap gap-[20px]">
            <div className="flex items-center w-[calc(50%-10px)] bg-white py-[36px] px-[44px] rounded-[30px] gap-x-[8px]">
                <div className="flex w-full max-w-[calc(51%-4px)] flex-col gap-[20px]">
                    <h3 className="text-[32px] font-semibold">Місія</h3>
                    <p className="text-[20px] font-semibold">Ми робимо добро системно — з розумінням, для людей і разом із людьми.</p>
                    <div className="w-full flex flex-col gap-[25px]">
                        <p className="text-[16px] w-[90%]">Благодійність для нас — це не просто допомога, а інвестиція в гідність, стійкість і мрії.</p>
                        <AtomHR className="max-w-[70%]" />
                        <p className="text-[16px] w-[90%]">Ми діємо чесно, прозоро й партнерськи, щоб наш вплив жив довше, ніж сама допомога.</p>
                    </div>
                </div>
                <div className="w-full max-w-[calc(49%-4px)] h-[203px] rounded-[20px] overflow-hidden relative">
                    <Image src="/test/mission.png" alt="mission" fill className="object-cover" />
                </div>
            </div>
            <div className="flex items-center w-[calc(50%-10px)] bg-white py-[36px] px-[44px] rounded-[30px] gap-x-[8px]">
                <div className="flex w-full max-w-[calc(51%-4px)] flex-col gap-[20px]">
                    <h3 className="text-[32px] font-semibold">Наша роль</h3>
                    <p className="text-[20px] font-semibold">Наша роль — розпізнати сенс, з’єднати партнерів, підсилити важливе.</p>
                    <div className="w-full flex flex-col gap-[25px]">
                        <p className="text-[16px] w-[90%]">Ми не просто підтримуємо ініціативи — ми обираємо ті, які створюють спільну цінність і мають довгостроковий вплив.</p>
                        <AtomHR className="max-w-[70%] bg-transparent" />
                        <p className="text-[16px] w-[90%]">Ми діємо як відповідальна компанія, яка інвестує у зміни, а не просто реагує на запити.</p>
                    </div>
                </div>
                <div className="w-full max-w-[calc(49%-4px)] h-[203px] rounded-[20px] overflow-hidden relative">
                    <Image src="/test/role.jpg" alt="mission" fill className="object-cover" />
                </div>
            </div>
            <div className="flex flex grid-cols-2 items-center w-[calc(50%-10px)] bg-white py-[36px] px-[44px] rounded-[30px] gap-x-[64px]">
                <div className="flex w-full flex-col gap-[20px] max-w-[46%]">
                    <h3 className="text-[32px] font-semibold">Наш підхід</h3>
                    <p className="text-[20px] font-semibold">Ми оцінюємо ініціативи за чіткими критеріями:</p>
                    <ul className="gap-[10px] py-[30px] px-[18px] bg-light-pink rounded-[20px]">
                        <li className="text-[14px] uppercase px-[25px] pl-[33px] relative before:content-[''] before:absolute before:left-[10px] before:top-[50%] before:w-[16px] before:h-[16px] before:bg-yellow before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2">відповідність цінностям</li>
                        <li className="text-[14px] uppercase px-[25px] pl-[33px] relative before:content-[''] before:absolute before:left-[10px] before:top-[50%] before:w-[16px] before:h-[16px] before:bg-yellow before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2">довгостроковий ефект</li>
                        <li className="text-[14px] uppercase px-[25px] pl-[33px] relative before:content-[''] before:absolute before:left-[10px] before:top-[50%] before:w-[16px] before:h-[16px] before:bg-yellow before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2">прозорість використання ресурсів</li>
                        <li className="text-[14px] uppercase px-[25px] pl-[33px] relative before:content-[''] before:absolute before:left-[10px] before:top-[50%] before:w-[16px] before:h-[16px] before:bg-yellow before:rounded-full before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2">партнерський підхід</li>
                    </ul>
                </div>
                <div className="w-full h-full flex items-end">
                    <div className="w-full flex flex-col gap-[25px]">
                        <p className="text-[16px] w-[90%]">Наш благодійний підхід базується на цінностях «Аврори»:</p>
                        <AtomHR className="max-w-[70%]" />
                        <p className="text-[16px] italic">#створюй_свій_світ | #взаємодій_заради_мрій | #будь_відкритим_до_нового</p>
                    </div>
                </div>
            </div>
            <div className="flex flex grid-cols-2 items-center w-[calc(50%-10px)] bg-white py-[36px] px-[44px] rounded-[30px] gap-x-[64px]">
                <div className="flex w-full flex-col gap-[20px]">
                    <h3 className="text-[32px] font-semibold">Приклади</h3>
                    <p className="text-[20px] font-semibold">Ми підтримуємо Сили безпеки та оборони, ветеранів, медиків, громади, культурні та освітні проєкти, ініціативи з гендерної рівності.</p>
                    <div className="w-full flex flex-col gap-[18px]">
                        <p className="text-[16px]">Віримо, що один бронежилет — це не просто річ, а шанс повернутись живим.</p>
                        <AtomHR className="max-w-[70%]" />
                        <p className="text-[16px]">Ми реалізуємо підтримку як у форматі цільових проєктів, так і через акції в мережі магазинів «Аврора».</p>
                        <AtomHR className="max-w-[70%]" />
                        <p className="text-[16px] font-semibold">У розділах "Новини" та "Фото" дивіться реалізовані проєкти, щоб побачити, як саме працює наша підтримка.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}