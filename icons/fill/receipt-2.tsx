import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Receipt2({
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
          d="M16.25,3.5H1.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h14.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={secondaryfill}
        />
        <path
          d="M14.75,5H3.25c-.414,0-.75,.336-.75,.75v10.5c0,.265,.14,.51,.367,.645,.227,.134,.509,.141,.742,.013l2.406-1.312,2.649,1.325c.211,.105,.46,.105,.671,0l2.649-1.325,2.406,1.312c.112,.062,.236,.092,.359,.092,.132,0,.265-.035,.383-.105,.228-.135,.367-.38,.367-.645V5.75c0-.414-.336-.75-.75-.75Zm-5.5,7h-3.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm0-3h-3.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h3.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm3,3h-.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Zm0-3h-.5c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h.5c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Receipt2;
