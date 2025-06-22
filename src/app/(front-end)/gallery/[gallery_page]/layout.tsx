import { JustChildrenType } from "@types";
import { ShowCaseGallery } from "@organisms";

export default function GalleryLayout({ children }: JustChildrenType) {
    return (
        <div className="max-w-[1760px]">
            {children}
            <ShowCaseGallery />
        </div>
    );
}
