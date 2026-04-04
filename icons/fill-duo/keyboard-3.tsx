import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Keyboard3({
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
          d="M5.75 8.5H5.25C4.836 8.5 4.5 8.836 4.5 9.25V9.75C4.5 10.164 4.836 10.5 5.25 10.5H5.75C6.164 10.5 6.5 10.164 6.5 9.75V9.25C6.5 8.836 6.164 8.5 5.75 8.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2.25 8.5H1.75C1.336 8.5 1 8.836 1 9.25V9.75C1 10.164 1.336 10.5 1.75 10.5H2.25C2.664 10.5 3 10.164 3 9.75V9.25C3 8.836 2.664 8.5 2.25 8.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.25 8.5H8.75C8.336 8.5 8 8.836 8 9.25V9.75C8 10.164 8.336 10.5 8.75 10.5H9.25C9.664 10.5 10 10.164 10 9.75V9.25C10 8.836 9.664 8.5 9.25 8.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12.75 8.5H12.25C11.836 8.5 11.5 8.836 11.5 9.25V9.75C11.5 10.164 11.836 10.5 12.25 10.5H12.75C13.164 10.5 13.5 10.164 13.5 9.75V9.25C13.5 8.836 13.164 8.5 12.75 8.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.5 5H7C6.586 5 6.25 5.336 6.25 5.75V6.25C6.25 6.664 6.586 7 7 7H7.5C7.914 7 8.25 6.664 8.25 6.25V5.75C8.25 5.336 7.914 5 7.5 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4 5H3.5C3.086 5 2.75 5.336 2.75 5.75V6.25C2.75 6.664 3.086 7 3.5 7H4C4.414 7 4.75 6.664 4.75 6.25V5.75C4.75 5.336 4.414 5 4 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11 5H10.5C10.086 5 9.75 5.336 9.75 5.75V6.25C9.75 6.664 10.086 7 10.5 7H11C11.414 7 11.75 6.664 11.75 6.25V5.75C11.75 5.336 11.414 5 11 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.5 5H14C13.586 5 13.25 5.336 13.25 5.75V6.25C13.25 6.664 13.586 7 14 7H14.5C14.914 7 15.25 6.664 15.25 6.25V5.75C15.25 5.336 14.914 5 14.5 5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.25 8.5H15.75C15.336 8.5 15 8.836 15 9.25V9.75C15 10.164 15.336 10.5 15.75 10.5H16.25C16.664 10.5 17 10.164 17 9.75V9.25C17 8.836 16.664 8.5 16.25 8.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M3.75 12.75C3.75 12.3358 4.08579 12 4.5 12H13.5C13.9142 12 14.25 12.3358 14.25 12.75C14.25 13.1642 13.9142 13.5 13.5 13.5H4.5C4.08579 13.5 3.75 13.1642 3.75 12.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Keyboard3;
