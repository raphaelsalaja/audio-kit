import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Location3({
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
          d="M3.5 6.50861C3.5 3.46913 5.96096 1 9 1C12.039 1 14.5 3.46902 14.5 6.50861C14.5 8.53911 13.5093 10.2935 12.4119 11.5601C11.8586 12.1986 11.2628 12.7317 10.7162 13.1348C10.1822 13.5286 9.65215 13.8303 9.22624 13.9651C9.07901 14.0116 8.92099 14.0116 8.77376 13.9651C8.34785 13.8303 7.81778 13.5286 7.28382 13.1348C6.73721 12.7317 6.14142 12.1986 5.58812 11.5601C4.49068 10.2935 3.5 8.53911 3.5 6.50861Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.5 6.5C6.5 5.11979 7.61979 4 9 4C10.3802 4 11.5 5.11979 11.5 6.5C11.5 7.88021 10.3802 9 9 9C7.61979 9 6.5 7.88021 6.5 6.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2 16.25C2 15.8358 2.33579 15.5 2.75 15.5H15.25C15.6642 15.5 16 15.8358 16 16.25C16 16.6642 15.6642 17 15.25 17H2.75C2.33579 17 2 16.6642 2 16.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Location3;
