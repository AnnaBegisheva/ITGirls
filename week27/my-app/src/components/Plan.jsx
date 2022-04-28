import '../assets/plan.css';

    function Plan(props) {
        return (
        <div className={'plan '  + props.theme.plan}>
    <header className={'plan__header ' + props.theme.plan__header}>{props.title}</header>
    <div className={'plan__price ' + props.theme.plan__price}>
        <p className='plan__priceValue_upper'>руб</p>
        <p className='plan__priceValue'>{props.price}</p>
        <p className='plan__priceValue_lower'>/мес</p>
    </div>
    <div className='plan__speed'>{props.speed}</div>
    <footer className='footer'>Объем включенного трафика не ограничен</footer>
        </div>
        );
    }
    
    export default Plan;