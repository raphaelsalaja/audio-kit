import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgStar({
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
          d="M14 11.068L15.004 13.103L17.25 13.429L15.625 15.013L16.009 17.25L14 16.194L11.991 17.25L12.375 15.013L10.75 13.429L12.996 13.103L14 11.068Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 10.319 2.108 11.552 2.723 12.617C3.153 13.423 2.67 15.329 1.75 16.25C3 16.318 4.647 15.753 5.383 15.277C5.872 15.559 6.647 15.933 7.662 16.125C8.39246 16.2633 9.94126 16.8173 9.7627 15.8631C9.08512 14.9071 8.195 14.0109 8.61017 12.7335C8.84027 12.0256 9.40238 11.4845 10.1021 11.2742C10.2074 11.2426 10.3159 11.2184 10.4268 11.2023L11.5018 11.0463L11.9822 10.0725C12.3612 9.30435 13.1434 8.81799 14 8.81799C14.6553 8.81799 15.2671 9.10265 15.6881 9.58038C16.25 9.67998 16.25 9.30213 16.25 9C16.25 4.996 13.004 1.75 9 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M16.2445 9.0813C16.2449 9.0537 16.25 9.0276 16.25 9C16.25 4.9961 13.004 1.75 9 1.75C4.996 1.75 1.75 4.9961 1.75 9C1.75 10.3188 2.108 11.552 2.723 12.6169C3.153 13.4228 2.67 15.3291 1.75 16.25C3 16.3179 4.647 15.7529 5.383 15.2769C5.872 15.5591 6.647 15.9331 7.662 16.125C8.095 16.207 8.543 16.25 9 16.25C9.0404 16.25 9.0797 16.2449 9.1199 16.2439"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 11.068L15.004 13.103L17.25 13.429L15.625 15.013L16.009 17.25L14 16.194L11.991 17.25L12.375 15.013L10.75 13.429L12.996 13.103L14 11.068Z"
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

export default MsgStar;
