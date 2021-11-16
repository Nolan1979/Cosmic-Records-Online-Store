const navigation = [
    { name: 'FAQs', href: '/FAQs' },
    { name: 'Login', href: '/Login' },
    { name: 'Contact', href: '/Contact' },
    { name: 'Company', href: '/Company' },
]

function Footer() {
    return (
        <div>
            <footer class="footer bg-dark relative pt-1 ">
                <div class="container mx-auto px-6 items-center">
                    <div class="mt-28 pb-20 border-t-2 border-gray-300 flex flex-col items-center">
                        <div class="sm:w-2/3 text-center py-6">
                                <p class="text-sm text-dark space-x-11 font-bold mb-2">
                                    {navigation.map((item) => (
                                        <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-200">
                                            {item.name}
                                        </a>
                                    ))}
                                </p>
                        </div>        
                    </div>                            
                </div>
            </footer>
        </div>
    );
}

export default Footer;