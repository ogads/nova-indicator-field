Nova.booting((app, store) => {
    app.component('index-indicator-field', require('./components/IndexField').default);
    app.component('detail-indicator-field', require('./components/DetailField').default);
    app.component('form-indicator-field', require('./components/FormField').default);
})
