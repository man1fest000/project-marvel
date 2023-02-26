import { useState } from "react";
import { ErrorBoundary } from "../errorBoundary/ErrorBoundary";
import { RandomChar } from "../randomChar/RandomChar";
import { CharList } from "../charList/CharList";
import { CharInfo } from "../charInfo/CharInfo";
import decoration from "../../resources/img/vision.png";
import { CharSearchForm } from "../charSearchForm/CharSearchForm";
import { Helmet } from "react-helmet";

const MainPage = () => {

    const [selectedChar, setSelectedChar] = useState(null);
    const onCharSelected = (id) => {
        setSelectedChar(id);
    };

    return (
        <>
            {/*В верху нашої сторінки створюємо компонент <Helmet> і в ньому вказуємо потрібні нам параметри як в звичайному html тегу <head>*/}
            <Helmet>
                <meta
                    name="description"
                    content="Marvel information portal"
                />
                <title>Marvel information portal</title>
            </Helmet>

            <ErrorBoundary>
                <RandomChar />
            </ErrorBoundary>
            <div className="char__content">
                <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected} />
                </ErrorBoundary>

                <div>
                    <ErrorBoundary>
                        <CharInfo charId={selectedChar} />
                    </ErrorBoundary>
                    <ErrorBoundary>
                        <CharSearchForm />
                    </ErrorBoundary>
                </div>
            </div>
            <img className="bg-decoration" src={decoration} alt="vision" />
        </>
    );
};

export { MainPage };
