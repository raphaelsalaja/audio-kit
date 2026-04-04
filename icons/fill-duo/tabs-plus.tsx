import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TabsPlus({
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
          d="M16.5001 4.75C16.5001 3.2314 15.2689 2 13.7501 2H11.5001V8H16.5001V4.75Z"
          fill={secondaryfill}
          opacity="0.2"
        />
        <path
          d="M11.5001 2H6.00012V8H11.5001V2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M10.0001 14.25C10.0001 13.0093 11.0099 12 12.2501 12H12.5001V11.75C12.5001 10.5093 13.5099 9.5 14.7501 9.5C15.4604 9.5 16.0874 9.83742 16.5001 10.3535V6.75C16.5001 6.3359 16.1643 6 15.7501 6H6.50012V2H4.25012C2.73132 2 1.50012 3.2314 1.50012 4.75V13.25C1.50012 14.7686 2.73132 16 4.25012 16H10.8536C10.3377 15.5874 10.0001 14.9604 10.0001 14.25Z"
          fill={fill}
        />
        <path
          d="M17.2501 13.5H15.5001V11.75C15.5001 11.3359 15.1642 11 14.7501 11C14.336 11 14.0001 11.3359 14.0001 11.75V13.5H12.2501C11.836 13.5 11.5001 13.8359 11.5001 14.25C11.5001 14.6641 11.836 15 12.2501 15H14.0001V16.75C14.0001 17.1641 14.336 17.5 14.7501 17.5C15.1642 17.5 15.5001 17.1641 15.5001 16.75V15H17.2501C17.6642 15 18.0001 14.6641 18.0001 14.25C18.0001 13.8359 17.6642 13.5 17.2501 13.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TabsPlus;
