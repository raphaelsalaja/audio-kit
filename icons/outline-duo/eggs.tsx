import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Eggs({
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
          d="M6.49961 3.25C9.12261 3.25 11.2496 8.125 11.2496 11.375C11.2836 14.033 9.15761 16.215 6.49961 16.25C3.8418 16.2148 1.71561 14.0329 1.74961 11.375C1.74961 8.12517 3.8768 3.2505 6.49961 3.25ZM6.49961 9.5C5.39519 9.50022 4.49961 10.3955 4.49961 11.5C4.49961 12.6045 5.39519 13.4998 6.49961 13.5C7.60421 13.5 8.49961 12.6046 8.49961 11.5C8.49961 10.3954 7.60421 9.5 6.49961 9.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M1.75001 11.375C1.75001 8.125 3.87701 3.25 6.50001 3.25C9.12301 3.25 11.25 8.125 11.25 11.375C11.284 14.033 9.15801 16.215 6.50001 16.25C3.84201 16.215 1.71601 14.033 1.75001 11.375Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 13.5C7.6046 13.5 8.5 12.6046 8.5 11.5C8.5 10.3954 7.6046 9.5 6.5 9.5C5.3954 9.5 4.5 10.3954 4.5 11.5C4.5 12.6046 5.3954 13.5 6.5 13.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.1522 12.6453C15.4357 11.876 16.2567 10.482 16.25 8.938C16.25 6.062 14.347 1.75 12 1.75C11.5392 1.7808 11.1017 1.9312 10.7188 2.1724"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Eggs;
