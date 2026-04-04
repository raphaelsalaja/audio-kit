import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PinSlash({
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
          d="M14.3568 3.6432C13.1229 2.03634 11.1825 1 9 1C5.27195 1 2.25 4.02392 2.25 7.75C2.25 10.0145 3.25475 12.009 4.46301 13.537L14.3568 3.6432Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.4446 5.73734L6.00525 15.1767C6.32579 15.4647 6.64417 15.7227 6.9499 15.9477C7.61652 16.4385 8.2659 16.8047 8.77415 16.9652C8.92114 17.0116 9.07886 17.0116 9.22585 16.9652C9.7341 16.8047 10.3835 16.4385 11.0501 15.9477C11.7294 15.4477 12.4711 14.7854 13.1601 13.9917C14.5289 12.4149 15.75 10.2465 15.75 7.75001C15.75 7.04912 15.6431 6.37308 15.4446 5.73734Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.25 7.75C6.25 6.23193 7.48104 5 9 5C10.202 5 11.2237 5.77143 11.5978 6.84563L8 10.3125C6.97559 9.91229 6.25 8.91547 6.25 7.75Z"
          fill={fill}
        />
        <path
          d="M16.5303 1.46967C16.8232 1.76256 16.8232 2.23744 16.5303 2.53033L2.53033 16.5303C2.23744 16.8232 1.76256 16.8232 1.46967 16.5303C1.17678 16.2374 1.17678 15.7626 1.46967 15.4697L15.4697 1.46967C15.7626 1.17678 16.2374 1.17678 16.5303 1.46967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default PinSlash;
