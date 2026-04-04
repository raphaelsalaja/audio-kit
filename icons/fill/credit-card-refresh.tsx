import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CreditCardRefresh({
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
          d="M17 5.75C17 4.233 15.767 3 14.25 3H3.75C2.233 3 1 4.233 1 5.75V6.5H17V5.75Z"
          fill={fill}
        />
        <path
          d="M17.25 9.5C16.836 9.5 16.5 9.836 16.5 10.25V10.625C15.928 10.227 15.237 10 14.5 10C12.57 10 11 11.57 11 13.5C11 15.43 12.57 17 14.5 17C15.46 17 16.388 16.6 17.046 15.902C17.33 15.601 17.316 15.126 17.015 14.842C16.714 14.558 16.24 14.572 15.954 14.873C15.573 15.278 15.057 15.5 14.5 15.5C13.397 15.5 12.5 14.603 12.5 13.5C12.5 12.397 13.397 11.5 14.5 11.5C14.994 11.5 15.44 11.693 15.795 12H14.75C14.336 12 14 12.336 14 12.75C14 13.164 14.336 13.5 14.75 13.5H17.25C17.664 13.5 18 13.164 18 12.75V10.25C18 9.836 17.664 9.5 17.25 9.5Z"
          fill={secondaryfill}
        />
        <path
          d="M9.72951 15C9.58041 14.5264 9.5 14.0224 9.5 13.5C9.5 10.7416 11.7416 8.5 14.5 8.5C14.9039 8.5 15.2989 8.54804 15.6788 8.63966C16.0282 8.2986 16.4883 8.07033 17 8.01374V8H1V12.25C1 13.767 2.233 15 3.75 15H9.72951ZM4.25 12H7.25C7.664 12 8 11.664 8 11.25C8 10.836 7.664 10.5 7.25 10.5H4.25C3.836 10.5 3.5 10.836 3.5 11.25C3.5 11.664 3.836 12 4.25 12Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CreditCardRefresh;
