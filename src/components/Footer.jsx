import moment from "moment/moment";

export default function Footer() {
    return (
        <section className="pt-6">
            <div className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400">
                <div>&copy;{moment(Date()).format("y")} Md Ahsanul Hoque</div>
                <div>
                    <a href="https://github.com/ahsan90/blog_filtering_searching_react_redux" target="_blank" rel="noreferrer">
                        Source Code Repository
                    </a>
                </div>
                <div>
                    <a href="https://github.com/ahsan90" target="_blank" rel="noreferrer">
                        Github
                    </a>
                </div>
                <div>
                    <a
                        href="https://www.youtube.com/channel/UCEup04z8YsGZp12axk4v8cQ"
                        target="_blank"
                        rel="noreferrer"
                    >
                        YouTube Channel
                    </a>
                </div>
            </div>
        </section>
    );
}
