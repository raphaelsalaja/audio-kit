import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dog2({
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
          d="m17.4185,4.019l-2.9595-.6831-1.335-2.002c-.1611-.2412-.4473-.3672-.7349-.3257-.2871.043-.5239.248-.6074.5264l-1.3398,4.4653h-6.1919c-.0571,0-.1104.0134-.1666.0168-.0287-.0034-.0538-.0168-.0834-.0168h-.75c-.6895,0-1.25-.5605-1.25-1.25,0-.4141-.3359-.75-.75-.75s-.75.3359-.75.75c0,1.0623.6116,1.9751,1.4953,2.4331-.3104.4451-.4953.9839-.4953,1.5669v7.25c0,.4141.3359.75.75.75h1.5c.4141,0,.75-.3359.75-.75v-3.1401l.5581-1.8599h.7085c1.228.8184,2.6519,1.25,4.1338,1.25h1.0996v3.75c0,.4141.3359.75.75.75h1.5c.4141,0,.75-.3359.75-.75v-2.9351l.8809-5.0649h.2295c1.3066,0,2.4404-.9297,2.6968-2.2109l.1782-.8921c.0796-.3979-.1714-.7866-.5669-.8779Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <circle cx="13.75" cy="4.75" fill={fill} r=".75" strokeWidth="0" />
      </g>
    </svg>
  );
}

export default Dog2;
