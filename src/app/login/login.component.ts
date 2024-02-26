import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="flex justify-center items-center" style="min-height: 100vh;">
      <div class="flex flex-col gap-4">
        <h4
          class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900"
        >
          Sign In
        </h4>

        <div
          class="
          relative
          block
          w-full
          p-2 
          text-base
          leading-5
          text-white
          bg-red-500
          rounded-lg
          opacity-100
          font-regular
          "
          *ngIf="isAlert"
        >
          <div class="flex text-xs font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              ></path>
            </svg>
            <span class="ml-3 mr-12">An info alert for showing message.</span>
          </div>
        </div>

        <div
          *ngIf="isAlert"
          class="relative block w-full p-2 text-base leading-5 text-white bg-red-500 rounded-lg opacity-100 font-regular"
        >
          <div class="flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              ></path>
            </svg>
            <div class="block text-xs">
              <div class="font-medium ml-3 mr-12">
                Ensure that these requirements are met:
              </div>
              <ul class="mt-2 list-inside list-disc">
                <li>At least 10 characters (and up to 100 characters)</li>
                <li>At least one lowercase character</li>
                <li>
                  Inclusion of at least one special character, e.g., ! @ # ?
                </li>
              </ul>
            </div>
          </div>
        </div>

        <form class="max-w-screen-lg mb-2 w-80 sm:w-96">
          <div class="flex flex-col gap-6 mb-1">
            <h6
              class="block -mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit"
            >
              Your Email
            </h6>
            <div class="relative h-11 w-full min-w-[200px]">
              <input
                class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                Email
              </label>
            </div>
            <h6
              class="block -mb-2 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-inherit"
            >
              Your Password
            </h6>
            <div class="relative h-11 w-full min-w-[200px]">
              <input
                class="w-full h-full px-3 py-3 font-sans text-sm font-normal transition-all bg-transparent border rounded-md peer border-blue-gray-200 border-t-transparent text-blue-gray-700 outline outline-0 placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              />
              <label
                class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.1] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500"
              >
                Password
              </label>
            </div>
            <div class="-ml-2.5 -mt-3">
              <div class="inline-flex items-center">
                <label
                  class="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="remember"
                >
                  <input
                    type="checkbox"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="remember"
                  />
                  <span
                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-3.5 w-3.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      stroke-width="1"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
                <label
                  class="mt-px font-light text-gray-700 cursor-pointer select-none"
                  htmlFor="remember"
                >
                  Remember Me
                </label>
              </div>
            </div>
          </div>
          <div class=" pt-0">
            <button
              class="block
              w-full
              select-none
              rounded-lg
              bg-gradient-to-tr
              from-gray-900
              to-gray-800
              py-3 px-6
              text-center
              align-middle
              font-sans
              text-xs
              font-bold
              uppercase
              text-white
              shadow-md
              shadow-gray-900/10
              transition-all
              hover:shadow-lg
              hover:shadow-gray-900/20
              active:opacity-[0.85]
              disabled:pointer-events-none
              disabled:opacity-50
              disabled:shadow-none"
              type="button"
              (click)="onClick()"
            >
              Sign In
  
            </button>
            <p
              class="flex justify-start mt-4 font-sans text-sm antialiased font-light leading-normal text-inherit"
            >
              Don&apos;t have an account?
              <a
                href="#signup"
                class="block ml-1 font-sans text-sm antialiased font-bold leading-normal text-blue-gray-900"
              >
                Sign up
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  `,
})
export class LoginComponent {
  isAlert: boolean;
  constructor(private router: Router) {}

  onClick() {
    this.router.navigate(['/']);
  }
}
