function Header() {
	return (
		<header class="h-24 sm:h-32 flex items-center z-30 w-full">
			<div class="container mx-auto px-6 flex items-center justify-between">
				<div class="uppercase text-gray-800 dark:text-white font-black text-3xl">
					<a href="/"> NFT MarketPlace </a>
				</div>
				<div class="flex items-center">
					<nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
						<a
							href="/"
							class="py-2 px-6 flex rounded-lg hover:bg-pink-600 hover:text-white"
						>
							Home
						</a>
						<a
							href="/#/products"
							class="py-2 px-6 flex rounded-lg hover:bg-pink-600 hover:text-white"
						>
							Products
						</a>
						<a
							href="/#/contact"
							class="py-2 px-6 flex rounded-lg hover:bg-pink-600 hover:text-white"
						>
							Contact
						</a>
						<a
							href="/#/teams"
							class="py-2 px-6 flex rounded-lg hover:bg-pink-600 hover:text-white"
						>
							Team
						</a>
					</nav>
					<button class="lg:hidden flex flex-col ml-4">
						<span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
						<span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
						<span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1"></span>
					</button>
				</div>
			</div>
		</header>
	);
}
export default Header;
