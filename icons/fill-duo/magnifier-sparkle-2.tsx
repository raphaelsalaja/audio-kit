import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagnifierSparkle2({
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
          d="m12.66,11.5996c.1439-.1846.2829-.374.4078-.5767.2178-.3525.1079-.8145-.2446-1.0317-.3521-.2168-.814-.1089-1.0317.2446-.8745,1.4175-2.3853,2.2642-4.0415,2.2642-2.6191,0-4.75-2.1309-4.75-4.75S5.1309,3,7.75,3c.2241,0,.4434.022.6592.0518.4058.0557.7896-.2295.8457-.6396.0571-.4102-.229-.7891-.6396-.8457-.2832-.0396-.5708-.0664-.8652-.0664C4.3037,1.5,1.5,4.3037,1.5,7.75s2.8037,6.25,6.25,6.25c1.4286,0,2.7692-.4851,3.8507-1.3389l3.619,3.6191c.1465.1465.3384.2197.5303.2197s.3838-.0732.5303-.2197c.293-.293.293-.7676,0-1.0605l-3.6202-3.6201Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
        <path
          d="m16.4873,4.0381l-1.8945-.6309-.6313-1.8945c-.1021-.3057-.3887-.5127-.7114-.5127s-.6094.207-.7114.5127l-.6313,1.8945-1.8945.6309c-.3062.1025-.5127.3887-.5127.7119s.2065.6094.5127.7119l1.8945.6309.6313,1.8945c.1021.3057.3887.5127.7114.5127s.6094-.207.7114-.5127l.6313-1.8945,1.8945-.6309c.3062-.1025.5127-.3887.5127-.7119s-.2065-.6094-.5127-.7119Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default MagnifierSparkle2;
