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
          d="m4,7.5h-.75c-1.5166,0-2.75-1.2334-2.75-2.75,0-.4141.3359-.75.75-.75s.75.3359.75.75c0,.6895.5605,1.25,1.25,1.25h.75c.4141,0,.75.3359.75.75s-.3359.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m17.4185,4.019l-2.9595-.6831-1.335-2.002c-.1611-.2412-.4473-.3672-.7349-.3257-.2871.043-.5239.248-.6074.5264l-1.3398,4.4653h-6.1919c-1.5166,0-2.75,1.2334-2.75,2.75v7.25c0,.4141.3359.75.75.75h1.5c.4141,0,.75-.3359.75-.75v-3.1401l.5581-1.8599h.7085c1.228.8184,2.6519,1.25,4.1338,1.25h1.0996v3.75c0,.4141.3359.75.75.75h1.5c.4141,0,.75-.3359.75-.75v-2.9351l.8809-5.0649h.2295c1.3066,0,2.4404-.9297,2.6968-2.2109l.1782-.8921c.0796-.3979-.1714-.7866-.5669-.8779Zm-3.6685,1.481c-.4142,0-.75-.3359-.75-.75,0-.4143.3358-.75.75-.75s.75.3357.75.75c0,.4141-.3358.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Dog2;
