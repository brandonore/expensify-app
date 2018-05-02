import moment from 'moment';

export default [{
    id: '1',
    description: 'Car',
    note: '',
    amount: 32800,
    createdAt: 0
}, {
    id: '2',
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
    id: '3',
    description: 'SLoan',
    note: '',
    amount: 5000,
    createdAt: moment(0).add(4, 'days').valueOf()
}];