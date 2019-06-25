var Counter1 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('div', {}, 'Counter no. 1: ' + this.state.counter),
            React.createElement('button', {onClick: this.increment, style:{width:200, height:100}}, 'Increase counter'),
            React.createElement('button', {onClick: this.decrement, style:{width:200, height:100}}, 'Decrease Counter')
        );
    }
});

var Counter2 = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('div', {}, 'Counter no. 2: ' + this.state.counter),
            React.createElement('button', {onClick: this.increment, style:{width:200, height:100}}, '+'),
            React.createElement('button', {onClick: this.decrement, style:{width:200, height:100}}, '-')
        );
    }
});

var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('inicjalizacja - getDefaultProps: Ustawienie domyślnych propsów, kiedy nie przekazujemy ich do komponentu - tylko dlaczego mielibyśmy cos takiego robić skoro możemy przekazać propsy do komponentów?')
    },

    componentWillMount: function() {
        console.log('inicjalizacja - componentWillMount: pokazanie \'loadera\' w oczekiwaniu na wygenerowanie ReactElementu')
    },

    componentDidMount: function() {
        console.log('inicjalizacja - ComponentDidMount: pokaznnie potwierdzenia zakończenia jakiegoś procesu, po wyrysowaniu przez render ReactElementu?')
    },

    componentWillReceiveProps: function() {
        console.log('aktualizacja - kiedy komponent otrzyam nowe propsy, czyli kiedy??? Kiedy zmieni się tablica z danymi na podstawie których renderujemy ReactElement? Aktualnie nic nie wyświetla, czyżby dlatego, że nie ma żadnych nowych propsów?')
    },

    shouldComponentUpdate: function() {
        console.log('aktualizacja - shouldComponentUpdate: nie wiem czemu się nie wyswietla, omponent się przcei')
    },

    componentWillUpdate: function() {
        console.log('aktualizacja - componentWillUpdate: jeśli shouldComponentUpdate == true => componentWillUpdate coś \"zrobi\"')
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement(Counter1, {},),
            React.createElement(Counter2, {},),
            React.createElement('div', {}, 'inicjalizacja - render: rysowanie ReacElementu; nie mogę użyć consloga, bo ta metoda musi zwracać ReactElement, tak?'),
            React.createElement('div', {}, 'inicjalizacja - getInitialState: już użyte w tym ćwiczeniu. UWAGA: nie mogę użyć consloga bo must return an object or null bo inaczej wywala błąd w konsoli, tak?')

        );
    },

    componentDidUpdate: function() {
        console.log('aktualizacja - componentDidUpdate: potwierdzenie wyświetlenia czegoś po stworzeniu i wyrenderowaniu ReactElementu')
    },

    componentWillUnmount: function() {
        console.log('odinstalowywania - kończenie nasłuchu na zdarzenia np. EventEmmiter')
    }
});

var counter = React.createElement(Counter);
ReactDOM.render(counter, document.getElementById('app'));