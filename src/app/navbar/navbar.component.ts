import { Component, Input } from '@angular/core';

@Component({
  selector: 'navbar',
  template: `
    <nav
      class="block sticky top-0 z-10 w-full max-w-screen-xl px-4 py-2 my-4 text-white bg-white border mx-auto shadow-md h-max rounded-xl border-white/80 bg-opacity-80 backdrop-blur-2xl backdrop-saturate-200 lg:px-8 lg:py-4"
    >
      <div class="flex items-center justify-between text-blue-gray-900 ">
        <a
          href="./"
          (click)="onLoarding()"
          class="mr-4 block cursor-pointer py-1.5 font-sans text-base font-semibold leading-relaxed tracking-normal text-black antialiased"
        >
          Material Tailwind
        </a>
        <div class="hidden lg:block">
          <ul
            class="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
          >
            <li
              class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
            >
              <a
                routerLink="/admin"
                (click)="onLoarding()"
                class="flex items-center transition-colors text-gray-900 hover:text-blue-500"
              >
                Admin
              </a>
            </li>
            <li
              class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
            >
              <a
                routerLink="/login"
                class="flex items-center transition-colors text-gray-900 hover:text-blue-500"
              >
                Log-in
              </a>
            </li>
            <li
              class="block p-1 font-sans text-sm antialiased font-medium leading-normal text-blue-gray-900"
            >
              <a
                routerLink="/login"
                class="flex items-center transition-colors text-gray-900 hover:text-blue-500"
              >
                Log-out
              </a>
            </li>
            <li
              class="block p-1 font-sans text-sm antialiased cursor-pointer font-medium leading-normal text-blue-gray-900 "
            >
              <div
                class="relative grid select-none items-center whitespace-nowrap rounded-lg bg-gray-900/10 py-1.5 px-3 font-sans text-xs font-bold uppercase text-gray-900 "
              >
                <div
                  class="absolute top-2/4 left-1.5 h-5 w-5 -translate-y-2/4 "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="w-5 h-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <span class="ml-[18px]">USERNAME</span>
              </div>
            </li>
          </ul>
        </div>
        <button
          class="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
        >
          <span
            class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="grey"
              aria-hidden="true"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              ></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  `,
})
export class NavbarComponent {
  @Input() isLoarding: boolean;

  onLoarding() {
    this.isLoarding != this.isLoarding;
  }
}
