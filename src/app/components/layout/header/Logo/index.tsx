import Link from 'next/link';

interface HeaderProps { }
const Logo: React.FC<HeaderProps> = () => {
    return (
        <Link href="/" className="inline-flex items-center">
            <img
                src="/images/logo/logo.svg"
                alt="Wintech"
                width={117}
                height={34}
                className="h-8 sm:h-9 md:h-10 w-auto dark:hidden"
                fetchPriority="high"
            />
            <img
                src="/images/logo/DarkModeLogo.svg"
                alt="Wintech"
                width={160}
                height={50}
                className="h-8 sm:h-9 md:h-10 w-auto dark:block hidden"
                fetchPriority="high"
            />
        </Link>
    );
};

export default Logo;
