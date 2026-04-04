import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PresentationScreen({
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
          d="M5.75,17c-.079,0-.159-.012-.237-.039-.393-.131-.605-.556-.474-.949l1-3c.13-.393,.556-.608,.949-.474,.393,.131,.605,.556,.474,.949l-1,3c-.104,.314-.397,.513-.711,.513Z"
          fill={secondaryfill}
        />
        <path
          d="M12.25,17c-.314,0-.607-.199-.711-.513l-1-3c-.131-.393,.081-.818,.474-.949,.392-.132,.818,.082,.949,.474l1,3c.131,.393-.081,.818-.474,.949-.079,.026-.159,.039-.237,.039Z"
          fill={secondaryfill}
        />
        <path
          d="M9,3.5c-.414,0-.75-.336-.75-.75V1.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.25c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <rect
          height="12"
          width="16"
          fill={fill}
          rx="2.75"
          ry="2.75"
          x="1"
          y="2"
        />
      </g>
    </svg>
  );
}

export default PresentationScreen;
