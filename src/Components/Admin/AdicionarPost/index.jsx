import { Box, Button, FormControl, Grid, MenuItem, Select, TextField, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import { useForm } from "../../../hooks/useForm";
import { postNoticias } from "../../../services/FireBase";

export const CriarNoticiaRender = ({ pageNowAdmin }) => {
  const { formValues, onChange, cleanFields } = useForm({
    genero: "",
    topico: "",
    id: "",
    imagem: "",
    noticia: "",
  })

  const SubmitForm = async () => {
    await postNoticias(formValues)
    alert("Formulario Enviado")
    cleanFields()
  }

  if (pageNowAdmin.toLowerCase() === "adicionar") {
    return <>
      <Typography
        fontFamily={"monospace"}
        fontSize={24}
        fontWeight={400}
        marginTop={5}
        textAlign={"center"}
      >
        Crie uma Notícia
      </Typography>
      <Grid
        container
        justifyContent={"center"}
        mb={4}
      >
        <Box
          marginTop={5}
          display={"grid"}
          width={600}
          padding={2.5}
          gap={3}
        >
          <FormControl onSubmit={SubmitForm}>
            <Stack  spacing={3} >
            <Select
              displayEmpty
              labelId="demo-multiple-name-label"
              id="demo-multiple-name"
              name="genero"
              value={formValues.genero }
              label="Genero"
              onChange={onChange}
            >
              <MenuItem value={"Geral"}>Geral</MenuItem>
              <MenuItem value={"Esporte"}>Esporte</MenuItem>
              <MenuItem value={"Entreterimento"}>Entreterimento</MenuItem>
              <MenuItem value={"Saude"}>Saúde</MenuItem>
              <MenuItem value={"Economia"}>Economia</MenuItem>
              <MenuItem value={"Policia"}>Polícia</MenuItem>
              <MenuItem value={"Brasil"}>Brasil</MenuItem>
            </Select>
            <TextField
              required
              id="outlined-required"
              label="topico"
              name="topico"
              value={formValues.topico}
              onChange={onChange}
            />
            <TextField
              required
              id="outlined-required"
              label="URL imagem"
              name="imagem"
              value={formValues.imagem}
              onChange={onChange}
              title="URL imagem"
            />
            <TextField
              required
              id="outlined-required"

              multiline
              rows={8}
              label="noticia"
              name="noticia"
              value={formValues.noticia}
              onChange={onChange}
            />
            <Button
              sx={{
                paddingLeft: 10.3,
                paddingRight: 10.3,
                background: "#000",
                '&:hover': {
                  backgroundColor: '#222'
                },
              }}
              size="small"
              variant="contained"
              onClick={() => { SubmitForm() }}
            > Posta noticia </Button>
             </Stack>
          </FormControl>
        </Box>
      </Grid>
    </>
  }
}
