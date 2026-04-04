import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RestaurantMenu({
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
          d="M15.75 16C15.336 16 15 15.664 15 15.25V2.75C15 2.336 15.336 2 15.75 2C16.164 2 16.5 2.336 16.5 2.75V15.25C16.5 15.664 16.164 16 15.75 16Z"
          fill={secondaryfill}
        />
        <path
          d="M13.5 2.86079C13.5 1.82186 12.6001 1.01159 11.5668 1.12041L4.06673 1.90991C3.17622 2.00371 2.5 2.75461 2.5 3.65029V14.3497C2.5 15.2454 3.17626 15.9963 4.06677 16.0901L11.5668 16.8796C12.6002 16.9884 13.5 16.1781 13.5 15.1392V2.86079ZM9.5 5.5C9.5 6.3284 8.828 7 8 7C7.172 7 6.5 6.3284 6.5 5.5C6.5 4.6716 7.172 4 8 4C8.828 4 9.5 4.6716 9.5 5.5ZM5.25 9.25C5.25 8.83579 5.58579 8.5 6 8.5H10C10.4142 8.5 10.75 8.83579 10.75 9.25C10.75 9.66421 10.4142 10 10 10H6C5.58579 10 5.25 9.66421 5.25 9.25ZM6.04678 11.5015C5.63338 11.4756 5.2773 11.7898 5.25146 12.2032C5.22562 12.6166 5.53981 12.9727 5.95322 12.9985L9.95322 13.2485C10.3666 13.2744 10.7227 12.9602 10.7485 12.5468C10.7744 12.1334 10.4602 11.7773 10.0468 11.7515L6.04678 11.5015Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default RestaurantMenu;
