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
                className="h-20 sm:h-24 md:h-28 w-auto dark:hidden"
                fetchPriority="high"
            />
            <img
                src="/images/logo/DarkModeLogo.svg"
                alt="Wintech"
                width={160}
                height={50}
                className="h-20 sm:h-24 md:h-28 w-auto dark:block hidden"
                fetchPriority="high"
            />
        </Link>
    );
};

export default Logo;
