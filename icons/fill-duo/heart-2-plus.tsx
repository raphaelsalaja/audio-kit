import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Heart2Plus({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M9.49999 11.75C9.49999 10.5093 10.5098 9.5 11.75 9.5H12V9.25C12 8.0093 13.0098 7 14.25 7C15.3257 7 16.2258 7.7603 16.4462 8.7715C16.9993 7.752 17.1507 6.5435 16.8418 5.3648C16.623 4.5367 16.1465 3.7681 15.5 3.2022C14.3896 2.2276 12.9404 1.8321 11.5312 2.1177C10.5283 2.3203 9.64839 2.836 8.99799 3.5816C8.95799 3.5367 8.9179 3.4927 8.8769 3.4493C8.0371 2.565 6.9033 2.0606 5.6835 2.0294C4.4618 2.0016 3.30559 2.444 2.42179 3.2833C1.53699 4.1231 1.03309 5.2569 1.00089 6.4762C0.969694 7.6959 1.41499 8.8546 2.25869 9.7423L7.7382 15.4352C8.0702 15.7819 8.5185 15.9733 8.9989 15.9733C9.4803 15.9733 9.92859 15.7819 10.2596 15.4362L11.6514 13.9902C10.4576 13.9375 9.49999 12.957 9.49999 11.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.75 11H15V9.25C15 8.8359 14.6641 8.5 14.25 8.5C13.8359 8.5 13.5 8.8359 13.5 9.25V11H11.75C11.3359 11 11 11.3359 11 11.75C11 12.1641 11.3359 12.5 11.75 12.5H13.5V14.25C13.5 14.6641 13.8359 15 14.25 15C14.6641 15 15 14.6641 15 14.25V12.5H16.75C17.1641 12.5 17.5 12.1641 17.5 11.75C17.5 11.3359 17.1641 11 16.75 11Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Heart2Plus;
