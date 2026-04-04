import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flame2({
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
          d="M9.47311 1.16799C9.31341 1.03809 9.10841 0.977596 8.90381 1.0064C8.69971 1.0328 8.51561 1.1417 8.39451 1.3077L5.42531 5.3702L4.41311 4.8077C4.20221 4.6905 3.94481 4.6827 3.72511 4.7867C3.50591 4.8917 3.35111 5.09629 3.30961 5.33599C3.23641 5.76129 2.59131 9.5225 2.59131 10.4883C2.59131 14.5645 5.84961 17 9.00001 17C12.1504 17 15.4087 14.5645 15.4087 10.4883C15.4087 6.042 9.71521 1.36479 9.47311 1.16799Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M9.00001 15.5C7.61621 15.5 6.4902 14.3408 6.4902 12.9165C6.4902 10.8374 8.37451 8.81981 8.45501 8.73491C8.73821 8.43511 9.26161 8.43511 9.54481 8.73491C9.62541 8.81991 11.5096 10.8374 11.5096 12.9165C11.5096 14.3408 10.3838 15.5 9.00001 15.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Flame2;
