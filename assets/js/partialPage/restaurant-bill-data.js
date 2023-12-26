var restaurantBillData = {
    "template-1": `  <div data-tm="template-1" class="templates template-1 rest-tm-container d-none">
    <div class="restaurant-slip">
        <div class="row">
            <div class="col-12 text-center mb-4">
                <p>WELCOME!!!</p>
                <p><span data-tm="rest-name">WEST HOLLYWOOD</span> </p>
                <p><span data-tm="rest-add">7677 state Los Angeles</span></p>
                <div com-tm="gstno" class="d-none">
                    <p data-tm="gstno-gst-check"><span data-tm="gstno-gst-field">GSTIN</span> : <span data-tm="gstno-gst-value">H75667MQ887754</span></p>
                    <p data-tm="gstno-fss-check"><span data-tm="gstno-fss-field">FSSAI</span> : <span data-tm="gstno-fss-value">H75667MQ887754</span></p>
                </div>

                <p>Original Receipt</p>
            </div>


            <div class="col-7 section-two">
                <p>Date: <span data-tm="bill-date">13 Dec 2023</span></p>
                <div com-tm="cus-field">
                    <div class="com-tm-body">
                        <p><span data-tm="cus-field-name">Customer Name</span>: <span
                                data-tm="cus-field-value">Mark</span></p>
                    </div>
                </div>
                <p>Table: #<span data-tm="table-no">45</span></p>
                <p>Receipt No.: <span data-tm="invoice-no">3574</span></p>
            </div>
            <div class="col-5 text-end section-two">
                <p>Time: <span data-tm="bill-time"></span></p>
            </div>

            <div com-tm="rest-items" class="mt-4">
                <div class="me-0 mb-1 row">
                    <div class="col-4 pe-0">
                        <p>Description</p>
                    </div>
                    <div class="col-2">
                        <p>Qty</p>
                    </div>
                    <div class="col-3">
                        <p>Price</p>
                    </div>
                    <div class="col-3 pe-0 ps-0 text-end">
                        <p>Total</p>
                    </div>
                </div>
                <div class="row item item-1">
                    <div class="col-4">
                        <span data-tm="item-name">Coffee</span>
                    </div>
                    <div class="col-2">
                        <span data-tm="item-qt">2</span>
                    </div>
                    <div class="col-3">
                        <span class="c-curr"></span><span data-tm="item-price">200.00</span>
                    </div>
                    <div class="col-3 pe-0 ps-0 text-end">
                        <span class="c-curr"></span><span data-tm="item-tot">400.00</span>
                    </div>
                </div>

            </div>
            <div class="col-12 text-end mt-4">
                <p><span class="tax-n">Sub Total: </span> <span class="c-curr"></span><span
                        data-tm="sub-total">400.00</span></p>
                <p class="tax-r" data-tm="tax-cgst-check"><span
                        data-tm="tax-cgst">CGST</span>: <span
                        data-tm="tax-cgst-tax">5</span>% <span class="c-curr"></span><span
                        data-tm="tax-cgst-amount">20.00</span></p>
                <p class="tax-r" data-tm="tax-sgst-check"><span
                        data-tm="tax-sgst">SGST</span>: <span
                        data-tm="tax-sgst-tax">5</span>% <span class="c-curr"></span><span
                        data-tm="tax-sgst-amount">20.00</span></p>
                <p class="tax-r">Total: <span class="c-curr"></span><span
                        data-tm="final-total">440.00</span></p>
            </div>
            <div class="col-12 mt-3">
                <p>PAYMENT MODE: <span data-tm="payment-method">Online</span></p>
            </div>
            <div class="col-12 text-center mt-5">
                <p>LESS PAPER, MORE TREES !!</p>
                <p>THANK YOU FOR A DELICIOUS MEAL,</p>
                <p>YOU CAN NOW CALL US ON <span data-tm="cus-number">1800 000000</span>
                    (TOLL-FREE) FOR
                    QUERIES/COMPLAINTS.</p>
            </div>
        </div>
    </div>
</div>`,
    "currency":`<div class="col-12 col-lg-6 mt-5">
                        
    <label for="currency" class="form-label">Currency</label>
    <select id="currency" data-fm="currency" class="form-control">

        <option value="">currency</option>
        <option value="AFN">Afghan Afghani - ؋</option>
        <option value="ALL">Albanian Lek - Lek</option>
        <option value="DZD">Algerian Dinar - دج</option>
        <option value="AOA">Angolan Kwanza - Kz</option>
        <option value="ARS">Argentine Peso - $</option>
        <option value="AMD">Armenian Dram - ֏</option>
        <option value="AWG">Aruban Florin - ƒ</option>
        <option value="AUD">Australian Dollar - $</option>
        <option value="AZN">Azerbaijani Manat - m</option>
        <option value="BSD">Bahamian Dollar - B$</option>
        <option value="BHD">Bahraini Dinar - .د.ب</option>
        <option value="BDT">Bangladeshi Taka - ৳</option>
        <option value="BBD">Barbadian Dollar - Bds$</option>
        <option value="BYR">Belarusian Ruble - Br</option>
        <option value="BEF">Belgian Franc - fr</option>
        <option value="BZD">Belize Dollar - $</option>
        <option value="BMD">Bermudan Dollar - $</option>
        <option value="BTN">Bhutanese Ngultrum - Nu.</option>
        <option value="BTC">Bitcoin - ฿</option>
        <option value="BOB">Bolivian Boliviano - Bs.</option>
        <option value="BAM">Bosnia-Herzegovina Convertible Mark - KM</option>
        <option value="BWP">Botswanan Pula - P</option>
        <option value="BRL">Brazilian Real - R$</option>
        <option value="GBP">British Pound Sterling - £</option>
        <option value="BND">Brunei Dollar - B$</option>
        <option value="BGN">Bulgarian Lev - Лв.</option>
        <option value="BIF">Burundian Franc - FBu</option>
        <option value="KHR">Cambodian Riel - KHR</option>
        <option value="CAD">Canadian Dollar - $</option>
        <option value="CVE">Cape Verdean Escudo - $</option>
        <option value="KYD">Cayman Islands Dollar - $</option>
        <option value="XOF">CFA Franc BCEAO - CFA</option>
        <option value="XAF">CFA Franc BEAC - FCFA</option>
        <option value="XPF">CFP Franc - ₣</option>
        <option value="CLP">Chilean Peso - $</option>
        <option value="CNY">Chinese Yuan - ¥</option>
        <option value="COP">Colombian Peso - $</option>
        <option value="KMF">Comorian Franc - CF</option>
        <option value="CDF">Congolese Franc - FC</option>
        <option value="CRC">Costa Rican ColÃ³n - ₡</option>
        <option value="HRK">Croatian Kuna - kn</option>
        <option value="CUC">Cuban Convertible Peso - $, CUC</option>
        <option value="CZK">Czech Republic Koruna - Kč</option>
        <option value="DKK">Danish Krone - Kr.</option>
        <option value="DJF">Djiboutian Franc - Fdj</option>
        <option value="DOP">Dominican Peso - $</option>
        <option value="XCD">East Caribbean Dollar - $</option>
        <option value="EGP">Egyptian Pound - ج.م</option>
        <option value="ERN">Eritrean Nakfa - Nfk</option>
        <option value="EEK">Estonian Kroon - kr</option>
        <option value="ETB">Ethiopian Birr - Nkf</option>
        <option value="EUR">Euro - €</option>
        <option value="FKP">Falkland Islands Pound - £</option>
        <option value="FJD">Fijian Dollar - FJ$</option>
        <option value="GMD">Gambian Dalasi - D</option>
        <option value="GEL">Georgian Lari - ლ</option>
        <option value="DEM">German Mark - DM</option>
        <option value="GHS">Ghanaian Cedi - GH₵</option>
        <option value="GIP">Gibraltar Pound - £</option>
        <option value="GRD">Greek Drachma - ₯, Δρχ, Δρ</option>
        <option value="GTQ">Guatemalan Quetzal - Q</option>
        <option value="GNF">Guinean Franc - FG</option>
        <option value="GYD">Guyanaese Dollar - $</option>
        <option value="HTG">Haitian Gourde - G</option>
        <option value="HNL">Honduran Lempira - L</option>
        <option value="HKD">Hong Kong Dollar - $</option>
        <option value="HUF">Hungarian Forint - Ft</option>
        <option value="ISK">Icelandic KrÃ³na - kr</option>
        <option value="INR">Indian Rupee - ₹</option>
        <option value="IDR">Indonesian Rupiah - Rp</option>
        <option value="IRR">Iranian Rial - ﷼</option>
        <option value="IQD">Iraqi Dinar - د.ع</option>
        <option value="ILS">Israeli New Sheqel - ₪</option>
        <option value="ITL">Italian Lira - L,£</option>
        <option value="JMD">Jamaican Dollar - J$</option>
        <option value="JPY">Japanese Yen - ¥</option>
        <option value="JOD">Jordanian Dinar - ا.د</option>
        <option value="KZT">Kazakhstani Tenge - лв</option>
        <option value="KES">Kenyan Shilling - KSh</option>
        <option value="KWD">Kuwaiti Dinar - ك.د</option>
        <option value="KGS">Kyrgystani Som - лв</option>
        <option value="LAK">Laotian Kip - ₭</option>
        <option value="LVL">Latvian Lats - Ls</option>
        <option value="LBP">Lebanese Pound - £</option>
        <option value="LSL">Lesotho Loti - L</option>
        <option value="LRD">Liberian Dollar - $</option>
        <option value="LYD">Libyan Dinar - د.ل</option>
        <option value="LTL">Lithuanian Litas - Lt</option>
        <option value="MOP">Macanese Pataca - $</option>
        <option value="MKD">Macedonian Denar - ден</option>
        <option value="MGA">Malagasy Ariary - Ar</option>
        <option value="MWK">Malawian Kwacha - MK</option>
        <option value="MYR">Malaysian Ringgit - RM</option>
        <option value="MVR">Maldivian Rufiyaa - Rf</option>
        <option value="MRO">Mauritanian Ouguiya - MRU</option>
        <option value="MUR">Mauritian Rupee - ₨</option>
        <option value="MXN">Mexican Peso - $</option>
        <option value="MDL">Moldovan Leu - L</option>
        <option value="MNT">Mongolian Tugrik - ₮</option>
        <option value="MAD">Moroccan Dirham - MAD</option>
        <option value="MZM">Mozambican Metical - MT</option>
        <option value="MMK">Myanmar Kyat - K</option>
        <option value="NAD">Namibian Dollar - $</option>
        <option value="NPR">Nepalese Rupee - ₨</option>
        <option value="ANG">Netherlands Antillean Guilder - ƒ</option>
        <option value="TWD">New Taiwan Dollar - $</option>
        <option value="NZD">New Zealand Dollar - $</option>
        <option value="NIO">Nicaraguan CÃ³rdoba - C$</option>
        <option value="NGN">Nigerian Naira - ₦</option>
        <option value="KPW">North Korean Won - ₩</option>
        <option value="NOK">Norwegian Krone - kr</option>
        <option value="OMR">Omani Rial - .ع.ر</option>
        <option value="PKR">Pakistani Rupee - ₨</option>
        <option value="PAB">Panamanian Balboa - B/.</option>
        <option value="PGK">Papua New Guinean Kina - K</option>
        <option value="PYG">Paraguayan Guarani - ₲</option>
        <option value="PEN">Peruvian Nuevo Sol - S/.</option>
        <option value="PHP">Philippine Peso - ₱</option>
        <option value="PLN">Polish Zloty - zł</option>
        <option value="QAR">Qatari Rial - ق.ر</option>
        <option value="RON">Romanian Leu - lei</option>
        <option value="RUB">Russian Ruble - ₽</option>
        <option value="RWF">Rwandan Franc - FRw</option>
        <option value="SVC">Salvadoran ColÃ³n - ₡</option>
        <option value="WST">Samoan Tala - SAT</option>
        <option value="SAR">Saudi Riyal - ﷼</option>
        <option value="RSD">Serbian Dinar - din</option>
        <option value="SCR">Seychellois Rupee - SRe</option>
        <option value="SLL">Sierra Leonean Leone - Le</option>
        <option value="SGD">Singapore Dollar - $</option>
        <option value="SKK">Slovak Koruna - Sk</option>
        <option value="SBD">Solomon Islands Dollar - Si$</option>
        <option value="SOS">Somali Shilling - Sh.so.</option>
        <option value="ZAR">South African Rand - R</option>
        <option value="KRW">South Korean Won - ₩</option>
        <option value="XDR">Special Drawing Rights - SDR</option>
        <option value="LKR">Sri Lankan Rupee - Rs</option>
        <option value="SHP">St. Helena Pound - £</option>
        <option value="SDG">Sudanese Pound - .س.ج</option>
        <option value="SRD">Surinamese Dollar - $</option>
        <option value="SZL">Swazi Lilangeni - E</option>
        <option value="SEK">Swedish Krona - kr</option>
        <option value="CHF">Swiss Franc - CHf</option>
        <option value="SYP">Syrian Pound - LS</option>
        <option value="STD">São Tomé and Príncipe Dobra - Db</option>
        <option value="TJS">Tajikistani Somoni - SM</option>
        <option value="TZS">Tanzanian Shilling - TSh</option>
        <option value="THB">Thai Baht - ฿</option>
        <option value="TOP">Tongan pa'anga - $</option>
        <option value="TTD">Trinidad & Tobago Dollar - $</option>
        <option value="TND">Tunisian Dinar - ت.د</option>
        <option value="TRY">Turkish Lira - ₺</option>
        <option value="TMT">Turkmenistani Manat - T</option>
        <option value="UGX">Ugandan Shilling - USh</option>
        <option value="UAH">Ukrainian Hryvnia - ₴</option>
        <option value="AED">United Arab Emirates Dirham - إ.د</option>
        <option value="UYU">Uruguayan Peso - $</option>
        <option value="USD">US Dollar - $</option>
        <option value="UZS">Uzbekistan Som - лв</option>
        <option value="VUV">Vanuatu Vatu - VT</option>
        <option value="VEF">Venezuelan BolÃ­var - Bs</option>
        <option value="VND">Vietnamese Dong - ₫</option>
        <option value="YER">Yemeni Rial - ﷼</option>
        <option value="ZMK">Zambian Kwacha - ZK</option>

    </select>
</div>`


}
