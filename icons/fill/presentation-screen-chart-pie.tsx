import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PresentationScreenChartPie({
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
          d="M5.75,17c-.078,0-.158-.012-.237-.039-.393-.131-.605-.556-.475-.949l1-3c.132-.392,.55-.606,.949-.474,.393,.131,.605,.556,.475,.949l-1,3c-.105,.314-.397,.513-.712,.513Z"
          fill={secondaryfill}
        />
        <path
          d="M12.25,17c-.314,0-.606-.199-.712-.513l-1-3c-.131-.393,.082-.818,.475-.949,.396-.133,.817,.082,.949,.474l1,3c.131,.393-.082,.818-.475,.949-.079,.026-.159,.039-.237,.039Z"
          fill={secondaryfill}
        />
        <path
          d="M9,3.5c-.414,0-.75-.336-.75-.75V1.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v1.25c0,.414-.336,.75-.75,.75Z"
          fill={fill}
        />
        <path
          d="M9,6.25c-.965,0-1.75,.785-1.75,1.75s.785,1.75,1.75,1.75,1.75-.785,1.75-1.75h-1.75v-1.75Z"
          fill={fill}
        />
        <path
          d="M14.25,2H3.75c-1.517,0-2.75,1.233-2.75,2.75v6.5c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm-5.25,9.25c-1.792,0-3.25-1.458-3.25-3.25s1.458-3.25,3.25-3.25,3.25,1.458,3.25,3.25-1.458,3.25-3.25,3.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default PresentationScreenChartPie;
