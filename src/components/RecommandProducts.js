import { Card } from "primereact/Card"

const header = (
    <img alt="Card" src="https://primefaces.org/cdn/primereact/images/usercard.png" />
);

const RecommandProducts = () => {
    return (
        <>
            <section className="recommand-products mt-4">
                <div className="grid grid-cols-5  gap-4">
                    <div><Card title="$ 25.99" subTitle="Subtitle" header={header} /></div>
                    <div><Card title="$ 25.99" subTitle="Subtitle" header={header} /></div>
                    <div><Card title="$ 25.99" subTitle="Subtitle" header={header} /></div>
                    <div><Card title="$ 25.99" subTitle="Subtitle" header={header} /></div>
                    <div><Card title="$ 25.99" subTitle="Subtitle" header={header} /></div>
                    <div><Card title="$ 25.99" subTitle="Subtitle" header={header} /></div>
                    <div><Card title="$ 25.99" subTitle="Subtitle" header={header} /></div>
                    <div><Card title="$ 25.99" subTitle="Subtitle" header={header} /></div>
                    <div><Card title="$ 25.99" subTitle="Subtitle" header={header} /></div>
                    <div><Card title="$ 25.99" subTitle="Subtitle" header={header} /></div>
                    <div><Card title="$ 25.99" subTitle="Subtitle" header={header} /></div>
                </div>
            </section>
        </>
    );
}

export default RecommandProducts;