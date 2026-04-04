import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShapeCustom({
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
          d="M16.598,6.199l-3.268-.513-.185-2.788h0c-.032-.487-.357-.904-.849-1.088-.552-.207-1.17-.083-1.567,.315l-3.445,3.435-4.792,.554c-.491,.057-.902,.336-1.099,.747-.175,.366-.148,.791,.07,1.136l1.681,2.663L.948,14.033c-.287,.44-.259,.988,.072,1.396,.386,.476,1.075,.644,1.672,.411l4.028-1.564,2.721,1.76c.067,.045,.14,.086,.213,.12,.192,.088,.397,.132,.603,.132,.17,0,.341-.03,.505-.091,.363-.135,.651-.403,.812-.754,.017-.036,.03-.072,.041-.11l1.144-4.09,4.396-2.764c.455-.286,.674-.773,.572-1.27-.108-.523-.551-.92-1.129-1.011Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ShapeCustom;
