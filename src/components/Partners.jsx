import './Partners.css';

const universityPartners = [
    { name: 'Sikkim Manipal University', logo: 'https://ui-avatars.com/api/?name=SMU&background=ffffff&color=0049BA&font-size=0.4&bold=true&size=200&border=2&border-color=eeeeee' },
    { name: 'Amity University', logo: 'https://ui-avatars.com/api/?name=AU&background=ffffff&color=0049BA&font-size=0.4&bold=true&size=200&border=2&border-color=eeeeee' },
    { name: 'Jain University', logo: 'https://ui-avatars.com/api/?name=JU&background=ffffff&color=0049BA&font-size=0.4&bold=true&size=200&border=2&border-color=eeeeee' },
    { name: 'Chandigarh University', logo: 'https://ui-avatars.com/api/?name=CU&background=ffffff&color=0049BA&font-size=0.4&bold=true&size=200&border=2&border-color=eeeeee' },
    { name: 'Lovely Professional University', logo: 'https://ui-avatars.com/api/?name=LPU&background=ffffff&color=0049BA&font-size=0.4&bold=true&size=200&border=2&border-color=eeeeee' },
    { name: 'Manipal University', logo: 'https://ui-avatars.com/api/?name=MU&background=ffffff&color=0049BA&font-size=0.4&bold=true&size=200&border=2&border-color=eeeeee' },
];

export default function Partners() {
    return (
        <section className="partners-section bg-light">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-heading">Our <span>Partners</span></h2>
                    <p className="section-subheading">Collaborating with the world's best institutions to build your future.</p>
                </div>

                <div className="partner-categories">
                    <div className="category-group">
                        <h3 className="category-title">University Partners</h3>
                        <div className="partners-flex">
                            {universityPartners.map((p, i) => (
                                <div className="partner-logo-box" key={i}>
                                    <img src={p.logo} alt={p.name} title={p.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
