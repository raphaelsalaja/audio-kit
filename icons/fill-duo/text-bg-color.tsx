import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextBgColor({
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
          d="M2 4.75C2 3.23079 3.23079 2 4.75 2H13.25C14.7692 2 16 3.23079 16 4.75V13.25C16 14.7692 14.7692 16 13.25 16H4.75C3.23079 16 2 14.7692 2 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.93203 5C8.63003 5 8.35749 5.18114 8.24054 5.45958L5.51055 11.9596C5.35015 12.3415 5.52972 12.7811 5.91161 12.9415C6.29351 13.1019 6.73313 12.9223 6.89353 12.5404L7.3305 11.5H10.6695L11.1065 12.5404C11.2669 12.9223 11.7065 13.1019 12.0884 12.9415C12.4703 12.7811 12.6499 12.3415 12.4895 11.9596L9.75951 5.45958C9.64257 5.18114 9.37003 5 9.06803 5H8.93203ZM10.0396 10L9.00003 7.52492L7.9605 10H10.0396Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextBgColor;
