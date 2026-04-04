import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mug({
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
          d="M13.25,11h-.761c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h.761c1.24,0,2.25-1.009,2.25-2.25v-1.5c0-.138-.112-.25-.25-.25h-2.429c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.429c.965,0,1.75,.785,1.75,1.75v1.5c0,2.068-1.683,3.75-3.75,3.75Z"
          fill={secondaryfill}
        />
        <path
          d="M13.208,9c0-1.642,.168-3.29,.499-4.9,.106-.517-.024-1.048-.357-1.457-.334-.409-.827-.643-1.354-.643H4.004c-.526,0-1.02,.234-1.354,.643-.333,.409-.464,.94-.357,1.458,.331,1.609,.499,3.258,.499,4.899s-.167,3.283-.497,4.891c-.107,.522,.023,1.057,.358,1.468,.333,.408,.826,.642,1.354,.642h7.986c.527,0,1.021-.234,1.354-.642,.335-.411,.466-.946,.358-1.468-.33-1.607-.497-3.252-.497-4.89Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Mug;
