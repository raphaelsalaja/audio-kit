import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextSparkle({
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
          d="M3.75 2C3.33579 2 3 2.33579 3 2.75C3 3.16421 3.33579 3.5 3.75 3.5H8.25V15.25C8.25 15.6642 8.58579 16 9 16C9.41421 16 9.75 15.6642 9.75 15.25V3.5H14.25C14.6642 3.5 15 3.16421 15 2.75C15 2.33579 14.6642 2 14.25 2H3.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.49301 6.77005L3.547 6.44998L3.23099 5.51004C3.12899 5.19994 2.62199 5.19994 2.51999 5.51004L2.20401 6.44998L1.258 6.77005C1.105 6.81995 1.00101 6.95993 1.00101 7.12003C1.00101 7.29003 1.105 7.43011 1.258 7.48001L2.20401 7.80008L2.51999 8.74002C2.57099 8.90002 2.714 9.00003 2.875 9.00003C3.036 9.00003 3.18001 8.89002 3.23001 8.74002L3.54599 7.80008L4.492 7.48001C4.645 7.43011 4.74899 7.29013 4.74899 7.12003C4.74899 6.96003 4.64601 6.82005 4.49301 6.77005Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M16.658 9.99L15.395 9.56995L14.974 8.31006C14.837 7.90006 14.162 7.90006 14.025 8.31006L13.604 9.56995L12.341 9.99C12.137 10.0601 11.999 10.25 11.999 10.46C11.999 10.6801 12.137 10.8699 12.341 10.9399L13.604 11.36L14.025 12.62C14.093 12.83 14.285 12.96 14.5 12.96C14.715 12.96 14.906 12.83 14.975 12.62L15.396 11.36L16.659 10.9399C16.863 10.87 17.001 10.6801 17.001 10.46C17.001 10.25 16.862 10.0601 16.658 9.99Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.25 13C5.664 13 6 12.66 6 12.25C6 11.84 5.664 11.5 5.25 11.5C4.836 11.5 4.5 11.84 4.5 12.25C4.5 12.66 4.836 13 5.25 13Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default TextSparkle;
