import React, { Component, FormEvent } from 'react';

type FormState = {
    baseCurrency?: string, 
    targetCurrency?: string, 
    amount?: number,
}

type FormProps = {
    receiveErrors: Function,
    clearErrors: Function,
    clearSelection: Function,
    fetchFXRate: Function,
    fetchHistoricalRates: Function,
    receiveSelection: Function,
    receiveAmount: Function,
    isLoading: Function,
    loading: boolean,
    errors: Array<string>,
    fx: any, 
    timeSeries: any
}

export class Form extends Component<FormProps, FormState> {

    constructor(props: FormProps) { 
        super(props)
        this.state = {
            baseCurrency: "USD",
            targetCurrency: "EUR",
            amount: 1
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    update(field: any) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    checkValidNumber(input: any) {
        if (isNaN(input)) {
            //not a valid number 
            this.props.receiveErrors(["Please enter a valid number"])
            return false;
        } else {
            return true;
        }
    }

    handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        this.props.clearErrors();
        this.props.clearSelection();
        if (this.checkValidNumber(this.state.amount)) {
            const base = this.state.baseCurrency || "";
            const target = this.state.targetCurrency || "";
            const amount = this.state.amount;
            if (!this.props.fx.includes(base + target) || !this.props.timeSeries.includes(base + target)) {
                this.props.isLoading(true);
                const fetchFXRate = this.props.fetchFXRate(base, target); 
                const fetchHistoricalRates = this.props.fetchHistoricalRates(base, target)
                Promise.all([fetchFXRate, fetchHistoricalRates]).then((responses) => {
                    this.props.isLoading(false);
                });
            }
            this.props.receiveSelection(base+target);
            this.props.receiveAmount(amount);
        } else {
        }
    }

    renderErrors() {
        return (
            <ul className="errors-list">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`}>
                        {error}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="form-container">
                <form onSubmit={this.handleSubmit} className="login-form-box">
                    <h1 className="header">Currency Converter 💰</h1> 
                <br />
                    <div className="conversion-form">
                        <br />
                        <div className="selection">
                            <label>From ➡️</label>
                            <select value={this.state.baseCurrency} onChange={this.update('baseCurrency')}>
                                <option value="AED">United Arab Emirates Dirham</option>
                                <option value="AFN">Afghan Afghani</option>
                                <option value="ALL">Albanian Lek</option>
                                <option value="AMD">Armenian Dram</option>
                                <option value="AOA">Angolan Kwanza</option>
                                <option value="ARS">Argentine Peso</option>
                                <option value="AUD">Australian Dollar</option>
                                <option value="AWG">Aruban Florin</option>
                                <option value="AZN">Azerbaijani Manat</option>
                                <option value="BBD">Barbadian Dollar</option>
                                <option value="BDT">Bangladeshi Taka</option>
                                <option value="BGN">Bulgarian Lev</option>
                                <option value="BHD">Bahraini Dinar</option>
                                <option value="BIF">Burundian Franc</option>
                                <option value="BMD">Bermudan Dollar</option>
                                <option value="BND">Brunei Dollar</option>
                                <option value="BOB">Bolivian Boliviano</option>
                                <option value="BRL">Brazilian Real</option>
                                <option value="BSD">Bahamian Dollar</option>
                                <option value="BTN">Bhutanese Ngultrum</option>
                                <option value="BWP">Botswanan Pula</option>
                                <option value="BZD">Belize Dollar</option>
                                <option value="CAD">Canadian Dollar</option>
                                <option value="CDF">Congolese Franc</option>
                                <option value="CHF">Swiss Franc</option>
                                <option value="CLP">Chilean Peso</option>
                                <option value="CNH">Chinese Yuan Offshore</option>
                                <option value="CNY">Chinese Yuan</option>
                                <option value="COP">Colombian Peso</option>
                                <option value="CUP">Cuban Peso</option>
                                <option value="CVE">Cape Verdean Escudo</option>
                                <option value="CZK">Czech Republic Koruna</option>
                                <option value="DJF">Djiboutian Franc</option>
                                <option value="DKK">Danish Krone</option>
                                <option value="DOP">Dominican Peso</option>
                                <option value="DZD">Algerian Dinar</option>
                                <option value="EGP">Egyptian Pound</option>
                                <option value="ERN">Eritrean Nakfa</option>
                                <option value="ETB">Ethiopian Birr</option>
                                <option value="EUR">Euro</option>
                                <option value="FJD">Fijian Dollar</option>
                                <option value="FKP">Falkland Islands Pound</option>
                                <option value="GBP">British Pound Sterling</option>
                                <option value="GEL">Georgian Lari</option>
                                <option value="GHS">Ghanaian Cedi</option>
                                <option value="GIP">Gibraltar Pound</option>
                                <option value="GMD">Gambian Dalasi</option>
                                <option value="GNF">Guinean Franc</option>
                                <option value="GTQ">Guatemalan Quetzal</option>
                                <option value="GYD">Guyanaese Dollar</option>
                                <option value="HKD">Hong Kong Dollar</option>
                                <option value="HNL">Honduran Lempira</option>
                                <option value="HRK">Croatian Kuna</option>
                                <option value="HTG">Haitian Gourde</option>
                                <option value="HUF">Hungarian Forint</option>
                                <option value="IDR">Indonesian Rupiah</option>
                                <option value="ILS">Israeli New Sheqel</option>
                                <option value="INR">Indian Rupee</option>
                                <option value="IQD">Iraqi Dinar</option>
                                <option value="IRR">Iranian Rial</option>
                                <option value="ISK">Icelandic Krona</option>
                                <option value="JEP">Jersey Pound</option>
                                <option value="JMD">Jamaican Dollar</option>
                                <option value="JOD">Jordanian Dinar</option>
                                <option value="JPY">Japanese Yen</option>
                                <option value="KES">Kenyan Shilling</option>
                                <option value="KGS">Kyrgystani Som</option>
                                <option value="KHR">Cambodian Riel</option>
                                <option value="KMF">Comorian Franc</option>
                                <option value="KPW">North Korean Won</option>
                                <option value="KRW">South Korean Won</option>
                                <option value="KWD">Kuwaiti Dinar</option>
                                <option value="KYD">Cayman Islands Dollar</option>
                                <option value="KZT">Kazakhstani Tenge</option>
                                <option value="LAK">Laotian Kip</option>
                                <option value="LBP">Lebanese Pound</option>
                                <option value="LKR">Sri Lankan Rupee</option>
                                <option value="LRD">Liberian Dollar</option>
                                <option value="LSL">Lesotho Loti</option>
                                <option value="LYD">Libyan Dinar</option>
                                <option value="MAD">Moroccan Dirham</option>
                                <option value="MDL">Moldovan Leu</option>
                                <option value="MGA">Malagasy Ariary</option>
                                <option value="MKD">Macedonian Denar</option>
                                <option value="MMK">Myanma Kyat</option>
                                <option value="MNT">Mongolian Tugrik</option>
                                <option value="MOP">Macanese Pataca</option>
                                <option value="MRU">Mauritanian Ouguiya</option>
                                <option value="MUR">Mauritian Rupee</option>
                                <option value="MVR">Maldivian Rufiyaa</option>
                                <option value="MWK">Malawian Kwacha</option>
                                <option value="MXN">Mexican Peso</option>
                                <option value="MYR">Malaysian Ringgit</option>
                                <option value="MZN">Mozambican Metical</option>
                                <option value="NAD">Namibian Dollar</option>
                                <option value="NGN">Nigerian Naira</option>
                                <option value="NOK">Norwegian Krone</option>
                                <option value="NPR">Nepalese Rupee</option>
                                <option value="NZD">New Zealand Dollar</option>
                                <option value="OMR">Omani Rial</option>
                                <option value="PAB">Panamanian Balboa</option>
                                <option value="PEN">Peruvian Nuevo Sol</option>
                                <option value="PGK">Papua New Guinean Kina</option>
                                <option value="PHP">Philippine Peso</option>
                                <option value="PKR">Pakistani Rupee</option>
                                <option value="PLN">Polish Zloty</option>
                                <option value="PYG">Paraguayan Guarani</option>
                                <option value="QAR">Qatari Rial</option>
                                <option value="RON">Romanian Leu</option>
                                <option value="RSD">Serbian Dinar</option>
                                <option value="RUB">Russian Ruble</option>
                                <option value="RWF">Rwandan Franc</option>
                                <option value="SAR">Saudi Riyal</option>
                                <option value="SBDf">Solomon Islands Dollar</option>
                                <option value="SCR">Seychellois Rupee</option>
                                <option value="SDG">Sudanese Pound</option>
                                <option value="SEK">Swedish Krona</option>
                                <option value="SGD">Singapore Dollar</option>
                                <option value="SLL">Sierra Leonean Leone</option>
                                <option value="SOS">Somali Shilling</option>
                                <option value="SRD">Surinamese Dollar</option>
                                <option value="SYP">Syrian Pound</option>
                                <option value="SZL">Swazi Lilangeni</option>
                                <option value="THB">Thai Baht</option>
                                <option value="TJS">Tajikistani Somoni</option>
                                <option value="TMT">Turkmenistani Manat</option>
                                <option value="TND">Tunisian Dinar</option>
                                <option value="TOP">Tongan Pa'anga</option>
                                <option value="TRY">Turkish Lira</option>
                                <option value="TTD">Trinidad and Tobago Dollar</option>
                                <option value="TWD">New Taiwan Dollar</option>
                                <option value="TZS">Tanzanian Shilling</option>
                                <option value="UAH">Ukrainian Hryvnia</option>
                                <option value="UGX">Ugandan Shilling</option>
                                <option value="USD" selected>United States Dollar</option>
                                <option value="UYU">Uruguayan Peso</option>
                                <option value="UZS">Uzbekistan Som</option>
                                <option value="VND">Vietnamese Dong</option>
                                <option value="WST">Samoan Tala</option>
                                <option value="YER">Yemeni Rial</option>
                                <option value="ZAR">South African Rand</option>
                                <option value="ZMW">Zambian Kwacha</option>
                                <option value="ZWL">Zimbabwean Dollar</option>
                            </select>
                        </div>
                        <br />
                        <br />
                        <div className="selection">
                            <label>To ⬅️</label>
                            <select value={this.state.targetCurrency} onChange={this.update('targetCurrency')}>
                                <option value="AED">United Arab Emirates Dirham</option>
                                <option value="AFN">Afghan Afghani</option>
                                <option value="ALL">Albanian Lek</option>
                                <option value="AMD">Armenian Dram</option>
                                <option value="AOA">Angolan Kwanza</option>
                                <option value="ARS">Argentine Peso</option>
                                <option value="AUD">Australian Dollar</option>
                                <option value="AWG">Aruban Florin</option>
                                <option value="AZN">Azerbaijani Manat</option>
                                <option value="BBD">Barbadian Dollar</option>
                                <option value="BDT">Bangladeshi Taka</option>
                                <option value="BGN">Bulgarian Lev</option>
                                <option value="BHD">Bahraini Dinar</option>
                                <option value="BIF">Burundian Franc</option>
                                <option value="BMD">Bermudan Dollar</option>
                                <option value="BND">Brunei Dollar</option>
                                <option value="BOB">Bolivian Boliviano</option>
                                <option value="BRL">Brazilian Real</option>
                                <option value="BSD">Bahamian Dollar</option>
                                <option value="BTN">Bhutanese Ngultrum</option>
                                <option value="BWP">Botswanan Pula</option>
                                <option value="BZD">Belize Dollar</option>
                                <option value="CAD">Canadian Dollar</option>
                                <option value="CDF">Congolese Franc</option>
                                <option value="CHF">Swiss Franc</option>
                                <option value="CLP">Chilean Peso</option>
                                <option value="CNH">Chinese Yuan Offshore</option>
                                <option value="CNY">Chinese Yuan</option>
                                <option value="COP">Colombian Peso</option>
                                <option value="CUP">Cuban Peso</option>
                                <option value="CVE">Cape Verdean Escudo</option>
                                <option value="CZK">Czech Republic Koruna</option>
                                <option value="DJF">Djiboutian Franc</option>
                                <option value="DKK">Danish Krone</option>
                                <option value="DOP">Dominican Peso</option>
                                <option value="DZD">Algerian Dinar</option>
                                <option value="EGP">Egyptian Pound</option>
                                <option value="ERN">Eritrean Nakfa</option>
                                <option value="ETB">Ethiopian Birr</option>
                                <option value="EUR" selected>Euro</option>
                                <option value="FJD">Fijian Dollar</option>
                                <option value="FKP">Falkland Islands Pound</option>
                                <option value="GBP">British Pound Sterling</option>
                                <option value="GEL">Georgian Lari</option>
                                <option value="GHS">Ghanaian Cedi</option>
                                <option value="GIP">Gibraltar Pound</option>
                                <option value="GMD">Gambian Dalasi</option>
                                <option value="GNF">Guinean Franc</option>
                                <option value="GTQ">Guatemalan Quetzal</option>
                                <option value="GYD">Guyanaese Dollar</option>
                                <option value="HKD">Hong Kong Dollar</option>
                                <option value="HNL">Honduran Lempira</option>
                                <option value="HRK">Croatian Kuna</option>
                                <option value="HTG">Haitian Gourde</option>
                                <option value="HUF">Hungarian Forint</option>
                                <option value="IDR">Indonesian Rupiah</option>
                                <option value="ILS">Israeli New Sheqel</option>
                                <option value="INR">Indian Rupee</option>
                                <option value="IQD">Iraqi Dinar</option>
                                <option value="IRR">Iranian Rial</option>
                                <option value="ISK">Icelandic Krona</option>
                                <option value="JEP">Jersey Pound</option>
                                <option value="JMD">Jamaican Dollar</option>
                                <option value="JOD">Jordanian Dinar</option>
                                <option value="JPY">Japanese Yen</option>
                                <option value="KES">Kenyan Shilling</option>
                                <option value="KGS">Kyrgystani Som</option>
                                <option value="KHR">Cambodian Riel</option>
                                <option value="KMF">Comorian Franc</option>
                                <option value="KPW">North Korean Won</option>
                                <option value="KRW">South Korean Won</option>
                                <option value="KWD">Kuwaiti Dinar</option>
                                <option value="KYD">Cayman Islands Dollar</option>
                                <option value="KZT">Kazakhstani Tenge</option>
                                <option value="LAK">Laotian Kip</option>
                                <option value="LBP">Lebanese Pound</option>
                                <option value="LKR">Sri Lankan Rupee</option>
                                <option value="LRD">Liberian Dollar</option>
                                <option value="LSL">Lesotho Loti</option>
                                <option value="LYD">Libyan Dinar</option>
                                <option value="MAD">Moroccan Dirham</option>
                                <option value="MDL">Moldovan Leu</option>
                                <option value="MGA">Malagasy Ariary</option>
                                <option value="MKD">Macedonian Denar</option>
                                <option value="MMK">Myanma Kyat</option>
                                <option value="MNT">Mongolian Tugrik</option>
                                <option value="MOP">Macanese Pataca</option>
                                <option value="MRU">Mauritanian Ouguiya</option>
                                <option value="MUR">Mauritian Rupee</option>
                                <option value="MVR">Maldivian Rufiyaa</option>
                                <option value="MWK">Malawian Kwacha</option>
                                <option value="MXN">Mexican Peso</option>
                                <option value="MYR">Malaysian Ringgit</option>
                                <option value="MZN">Mozambican Metical</option>
                                <option value="NAD">Namibian Dollar</option>
                                <option value="NGN">Nigerian Naira</option>
                                <option value="NOK">Norwegian Krone</option>
                                <option value="NPR">Nepalese Rupee</option>
                                <option value="NZD">New Zealand Dollar</option>
                                <option value="OMR">Omani Rial</option>
                                <option value="PAB">Panamanian Balboa</option>
                                <option value="PEN">Peruvian Nuevo Sol</option>
                                <option value="PGK">Papua New Guinean Kina</option>
                                <option value="PHP">Philippine Peso</option>
                                <option value="PKR">Pakistani Rupee</option>
                                <option value="PLN">Polish Zloty</option>
                                <option value="PYG">Paraguayan Guarani</option>
                                <option value="QAR">Qatari Rial</option>
                                <option value="RON">Romanian Leu</option>
                                <option value="RSD">Serbian Dinar</option>
                                <option value="RUB">Russian Ruble</option>
                                <option value="RWF">Rwandan Franc</option>
                                <option value="SAR">Saudi Riyal</option>
                                <option value="SBDf">Solomon Islands Dollar</option>
                                <option value="SCR">Seychellois Rupee</option>
                                <option value="SDG">Sudanese Pound</option>
                                <option value="SEK">Swedish Krona</option>
                                <option value="SGD">Singapore Dollar</option>
                                <option value="SLL">Sierra Leonean Leone</option>
                                <option value="SOS">Somali Shilling</option>
                                <option value="SRD">Surinamese Dollar</option>
                                <option value="SYP">Syrian Pound</option>
                                <option value="SZL">Swazi Lilangeni</option>
                                <option value="THB">Thai Baht</option>
                                <option value="TJS">Tajikistani Somoni</option>
                                <option value="TMT">Turkmenistani Manat</option>
                                <option value="TND">Tunisian Dinar</option>
                                <option value="TOP">Tongan Pa'anga</option>
                                <option value="TRY">Turkish Lira</option>
                                <option value="TTD">Trinidad and Tobago Dollar</option>
                                <option value="TWD">New Taiwan Dollar</option>
                                <option value="TZS">Tanzanian Shilling</option>
                                <option value="UAH">Ukrainian Hryvnia</option>
                                <option value="UGX">Ugandan Shilling</option>
                                <option value="USD">United States Dollar</option>
                                <option value="UYU">Uruguayan Peso</option>
                                <option value="UZS">Uzbekistan Som</option>
                                <option value="VND">Vietnamese Dong</option>
                                <option value="WST">Samoan Tala</option>
                                <option value="YER">Yemeni Rial</option>
                                <option value="ZAR">South African Rand</option>
                                <option value="ZMW">Zambian Kwacha</option>
                                <option value="ZWL">Zimbabwean Dollar</option>
                            </select>
                        </div>
                        <br />
                        <br />
                        <div className="submit-container">
                            <div className="amount-container">
                                <label>Amount:</label>
                                <input type="text"
                                        className="form-input"
                                        value={this.state.amount}
                                        onChange={this.update('amount')}
                                    />
                            </div>
                            <input className="submit" type="submit" value={this.props.loading ? "Wait..." : "Convert"} />
                        </div>
                    </div>
                </form>
                <div className="errors">{this.renderErrors()}</div>
            </div>
        );
    }
}

export default Form;
