import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BurgerSlash({
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
          d="M7.474 10.526C7.227 10.369 6.952 10.25 6.584 10.25C5.519 10.25 5.23201 11.25 4.16701 11.25C3.10201 11.25 2.815 10.25 1.75 10.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 10.25C15.185 10.25 14.898 11.25 13.833 11.25C12.954 11.25 12.605 10.5689 11.9112 10.3309"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.75 5.75C8.164 5.75 8.5 5.4142 8.5 5C8.5 4.5858 8.164 4.25 7.75 4.25C7.336 4.25 7 4.5858 7 5C7 5.4142 7.336 5.75 7.75 5.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.4922 7.75H14.898C15.222 7.75 15.462 7.451 15.386 7.135C15.3694 7.0655 15.3505 6.9914 15.3289 6.9133"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.805 4.195C12.985 3.381 11.777 2.75 9.99998 2.75H7.99998C4.09498 2.75 2.93498 5.8 2.61398 7.135C2.53798 7.451 2.77698 7.75 3.10198 7.75H10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.8957 13.6098C14.6636 14.1856 13.9386 15.25 11.75 15.25H6.99219"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default BurgerSlash;
