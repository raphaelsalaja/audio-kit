import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EyeLens({
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
          d="M1.39185 7.51689C2.38895 5.75655 4.8013 2.74989 9.00009 2.74989C13.1888 2.74989 15.5996 5.74212 16.6011 7.50418C16.6036 7.50844 16.606 7.5127 16.6084 7.51695C17.1306 8.43898 17.1305 9.56059 16.6085 10.4827C15.6114 12.243 13.1989 15.2499 9.00009 15.2499C4.80112 15.2499 2.38887 12.2428 1.39183 10.4829C0.869629 9.56077 0.869518 8.43887 1.39185 7.51689Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.928 10.906C12.287 10.357 12.5 9.704 12.5 9C12.5 7.07 10.93 5.5 9 5.5C7.07 5.5 5.5 7.07 5.5 9C5.5 10.93 7.07 12.5 9 12.5C9.684 12.5 10.317 12.295 10.857 11.955L13.724 14.784C13.87 14.929 14.06 15 14.25 15C14.443 15 14.637 14.925 14.784 14.777C15.075 14.482 15.071 14.007 14.776 13.716L11.928 10.905V10.906Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default EyeLens;
