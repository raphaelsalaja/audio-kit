import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Presentation({
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
          d="M4.5 8.25V7L18 13.5V15L4.5 8.25Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M20.9452 8.724L18.542 9.98669V13.8155L20.9452 12.7157V8.724Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M18.5064 9.99681L21 8.75" stroke={fill} />
        <path d="M3 2.25L18.5 10V13.75" stroke={fill} />
        <path
          d="M4.82918 1.33541L3.55279 1.97361C3.214 2.143 3 2.48926 3 2.86803V5.62964C3 6.00963 3.21536 6.35678 3.55579 6.52557L17.8484 13.612C18.2599 13.816 18.7422 13.8203 19.1572 13.6235L20.4283 13.021C20.7774 12.8555 21 12.5037 21 12.1174V9.36803C21 8.98926 20.786 8.643 20.4472 8.47361L6.17082 1.33541C5.74853 1.12426 5.25147 1.12426 4.82918 1.33541Z"
          stroke={fill}
        />
        <path
          d="M4.5 7V15.3153C4.5 15.8832 4.82071 16.4024 5.32853 16.6566L16.5524 22.2753C17.2173 22.6082 18 22.1247 18 21.3811V13.5"
          stroke={fill}
        />
        <path d="M10 19V22" stroke={fill} strokeLinecap="round" />
        <path
          d="M7 13.4312L8.72317 14.352L9.43598 16.0009L10.1488 16.3641L10.8872 15.026L11.9055 15.5448L12.8365 14L15 15.0861"
          stroke={fill}
          strokeLinecap="square"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  );
}

export default Presentation;
