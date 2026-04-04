import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeNotification({
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
          d="M1 5.25C1 3.73079 2.23079 2.5 3.75 2.5H14.25C15.7692 2.5 17 3.73079 17 5.25V11.337C16.7592 11.2801 16.5081 11.25 16.25 11.25C14.4554 11.25 13 12.7054 13 14.5C13 14.8489 13.055 15.185 13.1568 15.5H3.75C2.23079 15.5 1 14.2692 1 12.75V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3.75 2.5C2.23054 2.5 1 3.73203 1 5.25C1 5.52318 1.14853 5.77475 1.38773 5.9067L8.15473 9.6397C8.68119 9.93004 9.31874 9.93008 9.84519 9.63975L16.6123 5.9067C16.8515 5.77475 17 5.52318 17 5.25C17 3.73203 15.7695 2.5 14.25 2.5H3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.5 14.5C14.5 13.5338 15.2838 12.75 16.25 12.75C17.2162 12.75 18 13.5338 18 14.5C18 15.4662 17.2162 16.25 16.25 16.25C15.2838 16.25 14.5 15.4662 14.5 14.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EnvelopeNotification;
