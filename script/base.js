class MainContentHTML extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="mb-10">
            <img src="https://placehold.co/1920x1080/0069B3/ffffff/png" alt="Garuda Indonesia Promo Media"
                class="w-full max-w-full h-auto object-cover object-center max-h-[580px]" />

            <!-- Breadcrumb -->
            <section class="border-b border-gray-200 py-2">
                <div class="max-w-7xl mx-auto px-4">
                    <div class="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

                        <ul class="flex flex-wrap items-center gap-2 text-sm">
                            <li>
                                <a href="index.html" class="flex items-center gap-2 text-sky-700 hover:text-sky-900">
                                    <i class="bi bi-house-door-fill"></i>
                                    Home
                                </a>
                            </li>

                            <li class="flex items-center gap-2 text-gray-600 w-48 min-w-0">
                                <i class="bi bi-chevron-right"></i>
                                <span class="truncate">
                                    Enjoy an unforgettable mid-year holiday with discount up to IDR 750,000
                                </span>
                            </li>
                        </ul>

                        <div>
                            <ul class="flex items-center gap-4">
                                <li class="text-sm text-gray-500">Share:</li>
                                <li><a href="#" class="text-sky-900"><i class="bi bi-facebook"></i></a></li>
                                <li><a href="#" class="text-sky-900"><i class="bi bi-instagram"></i></a></li>
                                <li><a href="#" class="text-sky-900"><i class="bi bi-whatsapp"></i></a></li>
                                <li><a href="#" class="text-sky-900"><i class="bi bi-twitter"></i></a></li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            <!-- Article -->
            <article class="flex flex-col gap-8 max-w-7xl mx-auto px-4 py-8">
                <!-- Main Description -->
                <section class="flex flex-col gap-4">
                    <h1 class="mb-4 text-4xl font-bold leading-tight">
                        Enjoy an unforgettable mid year holiday with discount up to IDR 750,000
                    </h1>
                    <div>
                        <p class="text-base leading-7 text-gray-700">
                            Haven't had a vacation since the begining of the year?
                        </p>
                        <p class="text-base leading-7 text-gray-700">
                            Get additional benefits in the form of discount off up to IDR
                            2,000,000 for purchase to various domestic and international routes
                            during July 5 - 7, 2024.Valid for flight periods until
                            <strong>October 31, 2024</strong>
                        </p>
                    </div>
                    <p class="text-base leading-7 text-gray-700">
                        Use promo code <strong>MIDYEAR</strong> before choosing your flight
                    </p>
                </section>

                <!-- Terms and Conditions -->
                <section class="flex flex-col gap-4">
                    <h3 class="text-xl font-semibold">
                        Terms and condition:
                    </h3>

                    <ul class="list-disc space-y-2 pl-6">
                        <li>
                            Periode pemesanan :
                            <strong>1 Juli – 31 Desember 2024 (setiap hari Sabtu & Minggu)</strong>
                        </li>
                        <li>
                            Periode perjalanan :
                            <strong>hingga 30 Juni 2025</strong>
                        </li>
                        <li>
                            Berlaku untuk pembelian tiket sekali jalan dan pergi-pulang, baik
                            Domestik maupun Internasional
                        </li>
                        <li>
                            Potongan harga untuk pemegang kartu Debit BTN Prioritas Visa Gold
                            dan Platinum:<br />
                        </li>
                        <li>
                            Periode pemesanan :
                            <strong>1 Juli – 31 Desember 2024 (setiap hari Sabtu & Minggu)</strong>
                        </li>
                        <li>
                            Periode perjalanan :
                            <strong>hingga 30 Juni 2025</strong>
                        </li>
                        <li>
                            Berlaku untuk pembelian tiket sekali jalan dan pergi-pulang, baik
                            Domestik maupun Internasional
                        </li>
                    </ul>
                </section>

                <!-- Bank Mandiri -->
                <section class="flex flex-col gap-4">
                    <h3 class="text-xl font-semibold">
                        <a href="#">
                            Bank Mandiri
                        </a>
                    </h3>

                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Minimum Transaction
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Additional Discount
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Card type
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp3.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp350.000</b></span>
                                    </td>
                                    <td rowspan="2" class="border border-gray-300 p-3 align-middle">
                                        Mandiri credit card except Mandiri Corporate Card
                                    </td>
                                </tr>

                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp6.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp650.000</b></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <ul class="list-disc space-y-2 pl-6">
                        <li>Valid for 1x transaction per card per day</li>
                        <li>Not valid for multiple</li>
                        <li>Cannot combined with other transactions</li>
                        <li>Can be combined with Bank Mandiri installment program</li>
                    </ul>
                </section>

                <!-- Bank BRI -->
                <section class="flex flex-col gap-4">
                    <h3 class="text-xl font-semibold">
                        <a href="#">
                            Bank BRI
                        </a>
                    </h3>

                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Minimum Transaction
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Additional Discount
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Card type
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp3.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp350.000</b></span>
                                    </td>
                                    <td rowspan="2" class="border border-gray-300 p-3 align-middle">
                                        BRI Credit card Card
                                    </td>
                                </tr>

                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp6.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp650.000</b></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <ul class="list-disc space-y-2 pl-6">
                        <li>Valid for 1x transaction per card per day</li>
                        <li>Not valid for multiple</li>
                        <li>Cannot combined with other transactions</li>
                        <li>Can be combined with Bank Mandiri installment program</li>
                    </ul>
                </section>

                <!-- Bank BTN Prioritas -->
                <section class="flex flex-col gap-4">
                    <h3 class="text-xl font-semibold">
                        <a href="#">
                            Bank BTN Prioritas
                        </a>
                    </h3>

                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Minimum Transaction
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Additional Discount
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Card type
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp3.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp350.000</b></span>
                                    </td>
                                    <td rowspan="2" class="border border-gray-300 p-3 align-middle">
                                        BTN Debit card Prioritas Visa Gold and Platinum
                                    </td>
                                </tr>

                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp6.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp650.000</b></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <ul class="list-disc space-y-2 pl-6">
                        <li>Valid for 1x transaction per card per day</li>
                        <li>Not valid for multiple</li>
                        <li>Cannot combined with other transactions</li>
                        <li>Can be combined with Bank Mandiri installment program</li>
                    </ul>
                </section>

                <!-- CIMB Niaga -->
                <section class="flex flex-col gap-4">
                    <h3 class="text-xl font-semibold">
                        <a href="#">
                            CIMB Niaga
                        </a>
                    </h3>

                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Minimum Transaction
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Additional Discount
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Card type
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp3.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp350.000</b></span>
                                    </td>
                                    <td rowspan="2" class="border border-gray-300 p-3 align-middle">
                                        CIMB credit card except Mandiri Corporate & Regional Card
                                    </td>
                                </tr>

                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp6.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp650.000</b></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <ul class="list-disc space-y-2 pl-6">
                        <li>Valid for 1x transaction per card per day</li>
                        <li>Not valid for multiple</li>
                        <li>Cannot combined with other transactions</li>
                        <li>Can be combined with Bank Mandiri installment program</li>
                    </ul>
                </section>

                <!-- Digibank -->
                <section class="flex flex-col gap-4">
                    <h3 class="text-xl font-semibold">
                        <a href="#">
                            Digibank
                        </a>
                    </h3>

                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Minimum Transaction
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Additional Discount
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Card type
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp3.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp350.000</b></span>
                                    </td>
                                    <td rowspan="2" class="border border-gray-300 p-3 align-middle">
                                        Digibank credit card issued in Indonesia
                                    </td>
                                </tr>

                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp6.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp650.000</b></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <ul class="list-disc space-y-2 pl-6">
                        <li>Valid for 1x transaction per card per day</li>
                        <li>Not valid for multiple</li>
                        <li>Cannot combined with other transactions</li>
                        <li>Can be combined with Bank Mandiri installment program</li>
                    </ul>
                </section>

                <!-- TMRW -->
                <section class="flex flex-col gap-4">
                    <h3 class="text-xl font-semibold">
                        <a href="#">
                            TMRW
                        </a>
                    </h3>

                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Minimum Transaction
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Additional Discount
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Card type
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp3.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp350.000</b></span>
                                    </td>
                                    <td rowspan="2" class="border border-gray-300 p-3 align-middle">
                                        TMRW credit card issued in Indonesia
                                    </td>
                                </tr>

                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp6.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp650.000</b></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <ul class="list-disc space-y-2 pl-6">
                        <li>Valid for 1x transaction per card per day</li>
                        <li>Not valid for multiple</li>
                        <li>Cannot combined with other transactions</li>
                        <li>Can be combined with Bank Mandiri installment program</li>
                    </ul>
                </section>

                <!-- TMRWPay -->
                <section class="flex flex-col gap-4">
                    <h3 class="text-xl font-semibold">
                        <a href="#">
                            TMRWPay
                        </a>
                    </h3>

                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Minimum Transaction
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Additional Discount
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Card type
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp3.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp350.000</b></span>
                                    </td>
                                    <td rowspan="2" class="border border-gray-300 p-3 align-middle">
                                        Valid for ticket purchase use TMRWPay
                                    </td>
                                </tr>

                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp6.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp650.000</b></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <ul class="list-disc space-y-2 pl-6">
                        <li>Valid for 1x transaction per card per day</li>
                        <li>Not valid for multiple</li>
                        <li>Cannot combined with other transactions</li>
                        <li>Can be combined with Bank Mandiri installment program</li>
                    </ul>
                </section>

                <!-- Mega -->
                <section class="flex flex-col gap-4">
                    <h3 class="text-xl font-semibold">
                        <a href="#">
                            Mega
                        </a>
                    </h3>

                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Minimum Transaction
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Additional Discount
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Card type
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp3.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp350.000</b></span>
                                    </td>
                                    <td rowspan="2" class="border border-gray-300 p-3 align-middle">
                                        Mega credit card except Mega Barca Card, Mega Visa Card
                                    </td>
                                </tr>

                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp6.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp650.000</b></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <ul class="list-disc space-y-2 pl-6">
                        <li>Valid for 1x transaction per card per day</li>
                        <li>Not valid for multiple</li>
                        <li>Cannot combined with other transactions</li>
                        <li>Can be combined with Bank Mandiri installment program</li>
                    </ul>
                </section>

                <!-- Permata -->
                <section class="flex flex-col gap-4">
                    <h3 class="text-xl font-semibold">
                        <a href="#">
                            Permata
                        </a>
                    </h3>

                    <div class="overflow-x-auto">
                        <table class="w-full border-collapse border border-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Minimum Transaction
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Additional Discount
                                    </th>
                                    <th scope="col" class="border border-gray-300 p-3 text-left font-semibold">
                                        Card type
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp3.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp350.000</b></span>
                                    </td>
                                    <td rowspan="2" class="border border-gray-300 p-3 align-middle">
                                        Permata credit card except Platinum
                                    </td>
                                </tr>

                                <tr>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp6.500.000</b></span>
                                    </td>
                                    <td class="border border-gray-300 p-3">
                                        <span><b>Rp650.000</b></span>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <ul class="list-disc space-y-2 pl-6">
                        <li>Valid for 1x transaction per card per day</li>
                        <li>Not valid for multiple</li>
                        <li>Cannot combined with other transactions</li>
                        <li>Can be combined with Bank Mandiri installment program</li>
                    </ul>
                </section>
            </article>
        </div>
    `;
    }
}

customElements.define("main-content", MainContentHTML);