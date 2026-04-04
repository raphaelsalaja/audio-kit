import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ExitDoor({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M10.5 3.5L2.82918 7.33541C2.321 7.5895 2 8.10889 2 8.67705V20.132C2 20.8753 2.78231 21.3588 3.44721 21.0264L11.5 17"
          stroke={fill}
        />
        <path
          d="M18 13.75L10 17.75V3.75L18 7.75V13.75Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M10 17.75L18 13.75" stroke={fill} />
        <path
          d="M21 6.25L18 7.75V21.75L21 20.25V6.25Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M6 13.75L5 14.25" stroke={fill} strokeLinecap="round" />
        <path d="M18 7.75V21.75" stroke={fill} />
        <path
          d="M10 3.75L17.5528 7.52639C17.8343 7.66716 18.1657 7.66716 18.4472 7.52639L21 6.25"
          stroke={fill}
        />
        <path
          d="M10 17.75V4.36803C10 3.98926 10.214 3.643 10.5528 3.47361L12.3292 2.58541C12.7515 2.37426 13.2485 2.37426 13.6708 2.58541L20.4472 5.97361C20.786 6.143 21 6.48926 21 6.86803V19.632C21 20.0107 20.786 20.357 20.4472 20.5264L18.6708 21.4146C18.2485 21.6257 17.7515 21.6257 17.3292 21.4146L10 17.75Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default ExitDoor;
