import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Location5({
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
          d="M9 1.5C5.96096 1.5 3.5 3.96913 3.5 7.00861C3.5 9.03911 4.49068 10.7935 5.58812 12.0601C6.14142 12.6986 6.73721 13.2317 7.28382 13.6348C7.81778 14.0286 8.34785 14.3303 8.77376 14.4651C8.92099 14.5116 9.07901 14.5116 9.22624 14.4651C9.65215 14.3303 10.1822 14.0286 10.7162 13.6348C11.2628 13.2317 11.8586 12.6986 12.4119 12.0601C13.5093 10.7935 14.5 9.03911 14.5 7.00861C14.5 3.96902 12.039 1.5 9 1.5ZM11 7C11 8.104 10.104 9 9 9C7.896 9 7 8.104 7 7C7 5.896 7.896 5 9 5C10.104 5 11 5.896 11 7Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M14.3733 12.163C14.7566 12.0061 15.1946 12.1897 15.3514 12.5731L16.0981 14.3979C16.7041 15.8785 15.615 17.5 14.016 17.5H3.984C2.385 17.5 1.2959 15.8785 1.90187 14.398L2.64858 12.5733C2.80546 12.1899 3.24341 12.0063 3.62676 12.1632C4.01012 12.3201 4.19372 12.758 4.03684 13.1414L3.29013 14.9661C3.08815 15.4595 3.45102 16 3.984 16H14.016C14.549 16 14.9119 15.4596 14.7099 14.9661L13.9632 13.1412C13.8063 12.7578 13.9899 12.3199 14.3733 12.163Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Location5;
